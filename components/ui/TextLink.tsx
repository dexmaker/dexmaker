import React, { AnchorHTMLAttributes, FC } from "react";

export const TextLink: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = (
  props
) => {
  return (
    <span
      className="font-bold text-link hover:underline cursor-pointer"
      {...props}
    />
  );
};
