import React from "react";

import classNames from "@/functions/classNames";

import { AProps, ButtonProps, DivProps } from "react-html-props";

import "./index.scss";

export type LineColor = "green" | "gray" | "yellow" | "blue" | "purple" | "red";

export interface LineWrapperDefaultProps {
  component?: "div" | "button" | "a"
  /** Main color  */
  accentColor: LineColor
  /** Color on hover */
  hoverColor?: LineColor
  disabled?: boolean
}

export interface LineWrapperDivProps extends LineWrapperDefaultProps, DivProps {
  component: "div"
}

export interface LineWrapperButtonProps extends LineWrapperDefaultProps, ButtonProps {
  component: "button"
}

export interface LineWrapperLinkProps extends LineWrapperDefaultProps, AProps {
  component: "a"
}

export type LineWrapperProps = LineWrapperDivProps | LineWrapperButtonProps | LineWrapperLinkProps;

export function LineWrapper(props: LineWrapperProps) {
  const {
    className,
    component: Component = "div",
    accentColor = "gray",
    hoverColor,
    disabled = false,
    children
  } = props;

  return (
    <Component
      className={classNames(
        "lineWrapper",
        `lineWrapperAccentColor_${accentColor}`,
        disabled && "lineWrapperDisabled",
        !disabled && (hoverColor && `lineWrapperHoverColor_${hoverColor}`),
        className
      )}
    >
      <span className="lineWrapper__lineTop" />
      <span className="lineWrapper__lineMiddle">
        <span className="lineWrapper__lineSide" />

        {React.isValidElement(children) ? (
          React.cloneElement(children, {
            ...children.props,
            className: classNames(
              "lineWrapper__content",
              children.props.className
            )
          })
        ) : (
          <span className="lineWrapper__content">
            {children}
          </span>
        )}
        <span className="lineWrapper__lineSide" />
      </span>
      <span className="lineWrapper__lineBottom" />
    </Component>
  );
}
