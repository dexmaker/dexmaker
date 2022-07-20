import React, { FC } from "react";
import "@styles/globals.css";
import { AppProps } from "next/app";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="max-w-5xl p-3 mx-auto">
      <Component {...pageProps} />
    </div>
  );
};

export default App;
