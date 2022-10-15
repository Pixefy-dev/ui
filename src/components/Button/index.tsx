import React from "react";

import { LineWrapper } from "@/components/LineWrapper";

import classNames from "@/functions/classNames";

import { LineSize, LineWrapperButtonProps } from "@/components/LineWrapper/types";

import "./index.scss";

export interface IProps extends LineWrapperButtonProps {
  align?: "left" | "center" | "right"
}

/**
 * A custom Thing component.
 */
export class Button extends React.Component<IProps> {
  render() {
    const {
      size = LineSize.M,
      align = "center",
      disabled = false,
      children
    } = this.props;

    return (
      <LineWrapper
        {...this.props}
        className={classNames(
          "button",
          `button-size-${size}`,
          `button-align-${align}`,
          disabled && "button-disabled"
        )}
        component="button"
      >
        <span className="button__inner">
          {children}
        </span>
      </LineWrapper>
    );
  }
}
