import React from "react";

import classNames from "src/functions/classNames";

import "./index.scss";

export interface SupportItemProps {
  type: "outgoing" | "incoming"
  avatarUrl: string
  nickname: string
  time: string
  message: string
}

export function SupportItem(props: SupportItemProps) {
  const {
    type = "outgoing",
    avatarUrl,
    nickname,
    time,
    message
  } = props;

  return (
    <div className={classNames("supportItem", `supportItemType_${type}`)}>
      <div className="supportItem__line" />
      <div className="supportItem__content">
        <div className="supportItem__info">
          <img
            className="supportItem__avatar"
            src={avatarUrl}
            alt=""
          />
          <div className="supportItem__userInfo">
            <div className="supportItem__nickname">{nickname}</div>
            <div className="supportItem__time">{time}</div>
          </div>
        </div>
        <div className="supportItem__message">{message}</div>
      </div>
    </div>
  );
}