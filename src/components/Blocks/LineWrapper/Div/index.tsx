import React from "react";

import { LineWrapper, LineWrapperDivProps } from "@/components/Blocks/LineWrapper";

export interface DivProps extends LineWrapperDivProps {}

export function Div(props: DivProps) {
  return (
    <LineWrapper {...props} component="div" />
  );
}
