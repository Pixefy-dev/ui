import React from "react";

import classNames from "src/functions/classNames";

import { DivProps } from "react-html-props";

import "./index.scss";

export interface BlockProps extends DivProps {
  type?: "light" | "dark"
}

export function Block({ type = "dark", ...props }: BlockProps) {
  return (
    <div
      {...props}
      className={classNames(
        "block",
        `blockStyle_${type}`,
        props.className
      )}
    />
  );
}
