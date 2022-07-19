import { clsx } from "clsx";
import React, { FC, HTMLAttributes, PropsWithChildren } from "react";

export const NavButton: FC<
  PropsWithChildren<HTMLAttributes<HTMLSpanElement>>
> = (props) => {
  return (
    <span
      className={clsx(
        "p-1 w-32 border border-black",
        !props["aria-disabled"] && "cursor-pointer hover:underline text-link"
      )}
      {...props}
    />
  );
};
