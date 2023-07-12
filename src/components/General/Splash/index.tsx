import React, { useEffect, useState } from "react";

import randomInteger from "@/functions/randomInteger";
import classNames from "@/functions/classNames";

import { DivProps } from "react-html-props";

import "./index.scss";

export interface SplashProps extends DivProps {
  messages: Array<string>
}

export function Splash({ messages, ...props }: SplashProps) {
  const [randomIndex, setRandomIndex] = useState<number>();

  useEffect(() => generateRandomIndex(), []);

  const generateRandomIndex = () => setRandomIndex(randomInteger(0, messages.length - 1));

  if (randomIndex === undefined) {
    return null;
  }

  return (
    <div
      onClick={() => generateRandomIndex()}
      {...props}
      className={classNames("increaseMessage", props.className)}
    >
      {messages[randomIndex]}
    </div>
  );
}
