"use client";
import React, { PropsWithChildren } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { ThemeProvider as MuiThemProvider } from "@mui/material";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import theme from "./theme";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <CacheProvider value={cacheRtl}>
      <MuiThemProvider theme={theme}>{children}</MuiThemProvider>
    </CacheProvider>
  );
}

export default ThemeProvider;
