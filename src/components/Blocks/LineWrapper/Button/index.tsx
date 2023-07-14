import React from "react";

import classNames from "@/functions/classNames";

import { LineWrapper, LineWrapperButtonProps } from "@/components/Blocks/LineWrapper";

import "./index.scss";

export type ButtonProps = {
  /** Align of content inside element */
  align?: "left" | "center" | "right"
} & LineWrapperButtonProps;

export function Button(props: ButtonProps) {
  const {
    align = "center",
    children
  } = props;

  return (
    <LineWrapper
      {...props}
      component="button"
      className={classNames(
        "button",
        `button--align-${align}`
      )}
    >
      <span className="button__inner">
        {children}
      </span>
    </LineWrapper>
  );
}
