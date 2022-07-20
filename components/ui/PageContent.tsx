import React, { FC, PropsWithChildren } from "react";

export const PageContent: FC<PropsWithChildren> = ({ children }) => {
  return <main className="max-w-5xl p-3 mx-auto">{children}</main>;
};
