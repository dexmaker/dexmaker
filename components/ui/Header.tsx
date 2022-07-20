import React, { FC, PropsWithChildren } from "react";

export const Header: FC<PropsWithChildren> = ({ children }) => {
  return (
    <header>
      <h1 className="text-3xl mb-3">{children}</h1>
    </header>
  );
};
