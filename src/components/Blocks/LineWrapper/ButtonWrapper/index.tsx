import React from "react";

import classNames from "src/functions/classNames";

import {
  LineWrapper,
  LineWrapperButtonProps,
  LineWrapperLinkProps
} from "src/components/Blocks/LineWrapper";

import "./index.scss";

interface DefaultButtonWrapperProps {
  size?: "big" | "small",
  align?: "left" | "center" | "right"
}

export interface ButtonWrapperButtonProps extends DefaultButtonWrapperProps, LineWrapperButtonProps {}

export interface ButtonWrapperLinkProps extends DefaultButtonWrapperProps, LineWrapperLinkProps {}

export function ButtonWrapper(props: ButtonWrapperButtonProps | ButtonWrapperLinkProps) {
  const {
    size = "small",
    align = "center",
    children
  } = props;

  return (
    <LineWrapper
      {...props}
      className={classNames(
        "button",
        `buttonAlign_${align}`,
        `buttonSize_${size}`
      )}
    >
      {React.isValidElement(children) ? (
        React.cloneElement(children, {
          ...children.props,
          className: classNames(
            "button__inner",
            children.props.className
          )
        })
      ) : (
        <span className="button__inner">
          {children}
        </span>
      )}
    </LineWrapper>
  );
}
