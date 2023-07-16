import React from "react";

import AvatarIcon from "@/assets/icons/avatar.png";
import RankIcon from "@/assets/icons/rank.png";
import User from "@/assets/icons/user.png";
import ActivityIcon from "@/assets/icons/activity.png";

import "./index.scss";
import { OnlineIndicator } from "@/components/General/OnlineIndicator";

export function Profile() {
  return (
    <div className="profile">
      <div className="profile__inner">
        <div className="profile__user">
          <img
            className="profileUser__avatar"
            src={AvatarIcon}
            alt=""
          />
          <div className="profileUser__info">
            <span className="profileUser__nickname">H4kt</span>
            <p className="profileUser__status">На сайте</p>
          </div>
        </div>
        <div className="profile__rank">
          <img
            className="profileRank__icon"
            src={RankIcon}
            alt=""
          />
          <div className="profileRank__info">
            <span className="profileRank__name">Незерит</span>
            <p className="profileRank__level">Уровень 35</p>
          </div>
          <img
            className="profileRank__user"
            src={User}
            alt=""
          />
        </div>
        <div className="profile__activity">
          <img
            className="profileActivity__image"
            src={ActivityIcon}
            alt=""
          />
          <div className="profileActivity__info">
            <div className="profileActivity__title">
              <span>Pixefy MiniGa</span>
              <div className="profileActivity__online">
                <OnlineIndicator type="offline" />
                <span>100/1000</span>
              </div>
            </div>
            <p className="profileActivity__description">Классическое выживание от создателей лаунчера</p>
          </div>
        </div>
      </div>
      <div className="profile__backgroundMask" />
      <div className="profile__backgroundImage" />
    </div>
  );
}