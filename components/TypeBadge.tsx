import React, { FC } from "react";
import { PokemonType } from "@data/types";
import { theme } from "@styles/theme";

export const TypeBadge: FC<{ type: PokemonType }> = ({ type }) => {
  return (
    <span
      className="rounded-sm inline-block py-1 mx-1 uppercase font-semibold text-sm w-32 text-center"
      style={{ backgroundColor: theme.colors.pokemontype[type.toLowerCase()] }}
    >
      {type}
    </span>
  );
};
