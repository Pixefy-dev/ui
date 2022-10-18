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
  XXS = "xxs",
  XS = "xs",
  S = "s",
  M = "m",
  L = "l"
}

export interface LineWrapperDefaultProps {
  component?: "div" | "button" | "a";
  /** Size that control width and height, can be overwritten by `className` */
  size?: LineSize;
  /** Main color  */
  accentColor?: LineColor;
  /** Color on hover */
  hoverColor?: LineColor;
  /** Color on click */
  activeColor?: LineColor;
  /** Will component width resize 100% of container, height still depends on `size` */
  stretched?: boolean;
  disabled?: boolean;
}

export interface LineWrapperDivProps extends LineWrapperDefaultProps, React.HTMLAttributes<HTMLDivElement> {
  component?: "div"
}

export interface LineWrapperButtonProps extends LineWrapperDefaultProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  component?: "button"
}

export interface LineWrapperLinkProps extends LineWrapperDefaultProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  component?: "a"
}