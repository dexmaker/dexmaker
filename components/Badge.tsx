import { FC, PropsWithChildren } from "react";

export const Badge: FC<PropsWithChildren<{ color?: string }>> = ({
  color,
  children,
}) => {
  return (
    <span
      className="rounded-sm inline-block py-1 mr-1 uppercase font-semibold text-sm w-36 text-center"
      style={{ backgroundColor: color }}
    >
      {children}
    </span>
  );
};
