import React, { FC } from "react";
import { PokemonType } from "@data/types";
import { theme } from "@styles/theme";

export const TypeBadge: FC<{ type: PokemonType }> = ({ type }) => {
  return (
    <span
      className="rounded inline-block p-1 mx-1 uppercase font-semibold text-sm"
      style={{ backgroundColor: theme.colors.pokemontype[type.toLowerCase()] }}
    >
      {type}
    </span>
  );
};
