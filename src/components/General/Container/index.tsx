import React from "react";

import classNames from "@/functions/classNames";

import { DivProps } from "react-html-props";

import "./index.scss";

interface ContainerProps extends DivProps {}

export function Container(props: ContainerProps) {
  return (
    <div {...props} className={classNames("container", props.className)} />
  );
}