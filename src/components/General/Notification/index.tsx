import React from "react";

import { Block } from "@/components/General/Block";
import { LineWrapper } from "@/components/Blocks/LineWrapper";

import "./index.scss";

export function Notification() {
  return (
    <Block className="notification" type="light">
      <LineWrapper component="div" accentColor="green">
        <div className="notification__icon">
          {/*<img src={ExclamationIcon} alt="" />*/}
        </div>
      </LineWrapper>
      <p className="notification__text">
        Письмо успешно отправлено<br />на почту
      </p>
    </Block>
  );
}