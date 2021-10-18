import React, { ReactNode } from "react";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export const RTL = ({ children }: { children: ReactNode }) => (
  <StylesProvider jss={jss}>{children}</StylesProvider>
);
