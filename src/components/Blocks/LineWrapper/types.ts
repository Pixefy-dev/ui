import React from "react";

export type LineColor = "green" | "gray" | "yellow" | "blue" | "purple" | "red";

export interface LineWrapperDefaultProps {
  component?: "div" | "button" | "a";
  /** Main color  */
  accentColor?: LineColor;
  /** Color on hover */
  hoverColor?: LineColor;
  /** Color on click */
  activeColor?: LineColor;
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