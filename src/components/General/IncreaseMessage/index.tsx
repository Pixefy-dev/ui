import React from "react";

import randomInteger from "@/functions/randomInteger";
import classNames from "@/functions/classNames";

import { DivProps } from "react-html-props";

import "./index.scss";

interface IncreaseMessageProps extends DivProps {
  messages: Array<string>
}

export function IncreaseMessage({ messages, ...props }: IncreaseMessageProps) {
  const randomIndex = randomInteger(0, messages.length - 1);

  return (
    <div {...props} className={classNames("increaseMessage", props.className)}>
      {messages[randomIndex]}
    </div>
  );
}