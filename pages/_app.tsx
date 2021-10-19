import React, { FC, useEffect } from "react";
import { AppProps } from "next/app";
import { RTL } from "../components/RTL/index";
import { ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../theme";
import CardContextProvider from "../context/CardContext";

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      if (jssStyles.parentElement === null) {
        alert("Oops");
      } else {
        jssStyles.parentElement.removeChild(jssStyles);
      }
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <RTL>
        <CardContextProvider>
          <Component {...pageProps} />
          <CssBaseline />
        </CardContextProvider>
      </RTL>
    </ThemeProvider>
  );
};

export default CustomApp;
