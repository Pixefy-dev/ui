import React from "react";

import { Button, DefaultProps } from "@/components/Blocks/LineWrapper/Button";

import { LineWrapperLinkProps } from "@/components/Blocks/LineWrapper/types";

export interface IProps extends DefaultProps, LineWrapperLinkProps {
  href: string;
  alt: string
}
/**
 * A custom Thing component.
 */
export class Link extends React.Component<IProps> {
  render() {
    const {
      children
    } = this.props;

    return (
      <Button
        {...this.props}
        component="a"
      >
        {children}
      </Button>
    );
  }
}
