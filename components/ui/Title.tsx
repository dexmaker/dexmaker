import React, { FC, PropsWithChildren } from "react";

export const Title: FC<PropsWithChildren> = ({ children }) => {
  return <h1 className="text-3xl">{children}</h1>;
};
