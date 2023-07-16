import React from "react";

import { OnlineIndicator } from "@/components/General/OnlineIndicator";

import AvatarIcon from "@/assets/icons/avatar.png";
import RankIcon from "@/assets/icons/rank.png";
import ActivityIcon from "@/assets/icons/activity.png";
import User from "@/assets/icons/user.png";

import "./index.scss";

export function MiniProfile() {
  return (
    <div className="miniProfile">
      <div className="miniProfile__inner">
        <div className="miniProfile__user">
          <img
            className="miniProfileUser__avatar"
            src={AvatarIcon}
            alt=""
          />
          <div className="miniProfileUser__info">
            <span className="miniProfileUser__nickname">H4kt</span>
            <p className="miniProfileUser__status">На сайте</p>
          </div>
        </div>
        <div className="miniProfile__rank">
          <img
            className="miniProfileRank__icon"
            src={RankIcon}
            alt=""
          />
          <div className="miniProfileRank__info">
            <span className="miniProfileRank__name">Незерит</span>
            <p className="miniProfileRank__level">Уровень 35</p>
          </div>
          <img
            className="miniProfileRank__user"
            src={User}
            alt=""
          />
        </div>
        <div className="miniProfile__activity">
          <img
            className="miniProfileActivity__image"
            src={ActivityIcon}
            alt=""
          />
          <div className="miniProfileActivity__info">
            <div className="miniProfileActivity__title">
              <span>Pixefy MiniGames</span>
              <div className="miniProfileActivity__online">
                <OnlineIndicator type="offline" />
                <span>100/1000</span>
              </div>
            </div>
            <p className="miniProfileActivity__description">Классическое выживание от создателей лаунчера</p>
          </div>
        </div>
      </div>
      <div className="miniProfile__backgroundMask" />
      <div className="miniProfile__backgroundImage" />
    </div>
  );
}