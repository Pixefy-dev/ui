import React from "react";

import LineWrapper from "@/components/Blocks/LineWrapper";

import classNames from "@/functions/classNames";

import {
  LineWrapperButtonProps,
  LineWrapperLinkProps
} from "@/components/Blocks/LineWrapper/types";

import "./index.scss";

export interface DefaultProps {
  /** Align of content inside element */
  align?: "left" | "center" | "right"
}

interface ButtonProps extends DefaultProps, LineWrapperButtonProps {}

interface LinkProps extends DefaultProps, LineWrapperLinkProps {}

export type IProps = ButtonProps | LinkProps;

/**
 * A custom Thing component.
 */
export default function Button(props: IProps) {
  const {
    align = "center",
    disabled = false,
    children
  } = props;

  return (
    <LineWrapper
      {...props}
      className={classNames(
        "button",
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
