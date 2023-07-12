import React from "react";

import classNames from "@/functions/classNames";

import { DivProps } from "react-html-props";

import "./index.scss";

export interface BlockProps extends DivProps {}

export function Block(props: BlockProps) {
  return (
    <div
      {...props}
      className={classNames("block", props.className)}
    />
  );
}
