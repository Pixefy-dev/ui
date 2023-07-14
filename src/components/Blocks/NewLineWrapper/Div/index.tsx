import React from "react";

import { LineWrapper, LineWrapperDivProps } from "@/components/Blocks/NewLineWrapper";

export interface DivProps extends LineWrapperDivProps {}

export function Div(props: DivProps) {
  return (
    <LineWrapper {...props} component="div" />
  );
}
