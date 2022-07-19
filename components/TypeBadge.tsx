import React, { FC } from "react";
import { PokemonType } from "@data/types";
import { theme } from "@styles/theme";

export const TypeBadge: FC<{ type: PokemonType }> = ({ type }) => {
  return (
    <span
      className="rounded-sm inline-block py-1 mr-1 uppercase font-semibold text-sm w-36 text-center"
      style={{ backgroundColor: theme.colors.pokemontype[type.toLowerCase()] }}
    >
      {type}
    </span>
  );
};
