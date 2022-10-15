import React from "react";

import { LineWrapper } from "@/components/LineWrapper";

import { LineWrapperButtonProps } from "@/components/LineWrapper/types";

import "./index.scss";

/**
 * A custom Thing component.
 */
export class Button extends React.Component<LineWrapperButtonProps> {
  render() {
    const { children } = this.props;

    return (
      <LineWrapper
        className="button"
        component="button"
        {...this.props}
      >
        <span className="button__inner">
          {children}
        </span>
      </LineWrapper>
    );
  }
}
