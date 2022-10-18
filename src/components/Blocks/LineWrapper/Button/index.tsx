import React from "react";

import { LineWrapper } from "@/components/Blocks/LineWrapper";

import classNames from "@/functions/classNames";

import {
  LineSize,
  LineWrapperButtonProps,
  LineWrapperLinkProps
} from "@/components/Blocks/LineWrapper/types";

import "./index.scss";

export interface DefaultProps {
  align?: "left" | "center" | "right"
}

interface ButtonProps extends DefaultProps, LineWrapperButtonProps {}

interface LinkProps extends DefaultProps, LineWrapperLinkProps {}

export type IProps = ButtonProps | LinkProps;

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
          `button--size-${size}`,
          `button--align-${align}`,
          disabled && "button--disabled"
        )}
      >
        <span className="button__inner">
          {children}
        </span>
      </LineWrapper>
    );
  }
}
