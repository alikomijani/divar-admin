"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import React, { PropsWithChildren } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CssBaseline, ThemeProvider as MuiThemProvider } from "@mui/material";
import theme from "./theme";

function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <AppRouterCacheProvider
      key="muirtl"
      options={{
        stylisPlugins: [prefixer, rtlPlugin],
      }}
    >
      <MuiThemProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemProvider>
    </AppRouterCacheProvider>
  );
}
export default ThemeProvider;
