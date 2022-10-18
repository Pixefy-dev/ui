import React from "react";

import { LineWrapper } from "@/components/Blocks/LineWrapper";

import { LineWrapperDivProps } from "@/components/Blocks/LineWrapper/types";

export interface IProps extends LineWrapperDivProps {}
/**
 * A custom Thing component.
 */
export class Div extends React.Component<IProps> {
  render() {
    const { children } = this.props;

    return (
      <LineWrapper {...this.props}>
        {children}
      </LineWrapper>
    );
  }
}
