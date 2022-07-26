import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import { Dex, WithId } from "@data/types";
import { dexes } from "@data/presets";

export interface DexState {
  dexes: WithId<Dex>[];
}

const initialState: DexState = {
  dexes: [],
};

export const setDexes = createAction<WithId<Dex>[]>("setDexes");

export const setDexName = createAsyncThunk(
  "setName",
  async ({ dexId, name }: { dexId: number; name: string }) => {
    const dex = dexes.find((dex) => dex.id === dexId);
    if (!dex) throw new Error("Dex not found");

    dex.name = name;

    localStorage.setItem("dexes", JSON.stringify(dexes));
    return dex;
  }
);

export const dexReducer = createReducer(initialState, (builder) => {
  builder.addCase(setDexName.fulfilled, (state, action) => {
    state.dexes = state.dexes.map((dex) =>
      dex.id === action.payload.id ? action.payload : dex
    );
  });
  builder.addCase(setDexes, (state, action) => {
    state.dexes = action.payload;
  });
});
