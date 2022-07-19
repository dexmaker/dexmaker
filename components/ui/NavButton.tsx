import { clsx } from "clsx";
import React, {
  FC,
  forwardRef,
  HTMLAttributes,
  PropsWithChildren,
} from "react";

type NavButtonProps = PropsWithChildren<HTMLAttributes<HTMLSpanElement>>;

export const NavButton: FC<NavButtonProps> = forwardRef<
  HTMLSpanElement,
  NavButtonProps
>(function NavButton(props, ref) {
  return (
    <span
      className={clsx(
        "p-1 grow border border-black border-r-0 first:rounded-l-sm last:border-r last:rounded-r-sm",
        !props["aria-disabled"] && "cursor-pointer hover:underline text-link"
      )}
      ref={ref}
      {...props}
    />
  );
});
