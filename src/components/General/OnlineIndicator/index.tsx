import React from "react";

import classNames from "@/functions/classNames";

import "./index.scss";

export type OnlineIndicatorType = "online" | "offline";

export interface OnlineIndicatorProps {
  type: OnlineIndicatorType
}

export function OnlineIndicator({ type }: OnlineIndicatorProps) {
  return (
    <div className={classNames("onlineIndicator", `onlineIndicatorType__${type}`)}>
      <div className="onlineIndicator__block" />
    </div>
  );
}