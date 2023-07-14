import React from "react";

import { LineWrapper, LineWrapperLinkProps } from "@/components/Blocks/LineWrapper";

export type LinkProps = LineWrapperLinkProps;

export function Link(props: LinkProps) {
  return (
    <LineWrapper
      {...props}
      component="a"
    />
  );
}
