import React from "react";

import classNames from "src/functions/classNames";

import {
  LineWrapper,
  LineWrapperButtonProps,
  LineWrapperLinkProps
} from "src/components/Blocks/LineWrapper";

import "./index.scss";

interface DefaultButtonWrapperProps {
  align?: "left" | "center" | "right"
}

export interface ButtonWrapperButtonProps extends DefaultButtonWrapperProps, LineWrapperButtonProps {}

export interface ButtonWrapperLinkProps extends DefaultButtonWrapperProps, LineWrapperLinkProps {}

export function ButtonWrapper(props: ButtonWrapperButtonProps | ButtonWrapperLinkProps) {
  const {
    align = "center",
    children
  } = props;

  return (
    <LineWrapper
      {...props}
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
