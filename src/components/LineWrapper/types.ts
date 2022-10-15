import React from "react";

export enum LineColor {
  GREEN = "green",
  GRAY = "gray",
  YELLOW = "yellow",
  BLUE = "blue",
  PURPLE = "purple",
  RED = "red"
}

export enum LineSize {
  EXS = "esx",
  XS = "xs",
  S = "s",
  M = "m",
  L = "l"
}

export interface LineWrapperDefaultProps {
  // component: "div" | "button" | "a";
  // sized?: LineSize;
  accentColor?: LineColor;
  hoverColor?: LineColor;
  activeColor?: LineColor;
}

export interface LineWrapperDivProps extends LineWrapperDefaultProps, React.ComponentProps<"div"> {}

export interface LineWrapperButtonProps extends LineWrapperDefaultProps, React.ButtonHTMLAttributes<HTMLButtonElement> {}

export interface LineWrapperLinkProps extends LineWrapperDefaultProps, React.ComponentProps<"a"> {}