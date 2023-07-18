import React from "react";

import classNames from "src/functions/classNames";

import { LineWrapper, LineWrapperDivProps } from "src/components/Blocks/LineWrapper";

import "./index.scss";

export interface NumberCellProps extends LineWrapperDivProps {}

export function NumberCell({ className, children, ...props }: NumberCellProps) {
  return (
    <LineWrapper
      {...props}
      className={classNames("cellNumber", className)}
      component="div"
    >
      <div className="cellNumber__inner">
        {children}
      </div>
    </LineWrapper>
  );
}