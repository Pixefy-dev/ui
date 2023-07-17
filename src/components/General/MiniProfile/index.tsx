import React from "react";

import { OnlineIndicator, OnlineIndicatorType } from "src/components/General/OnlineIndicator";
import { Skin } from "src/components/General/Skin";

import classNames from "src/functions/classNames";

import RankIcon from "src/assets/icons/rank.png";
import ActivityIcon from "src/assets/icons/activity.png";

import { DivProps } from "react-html-props";

import "./index.scss";

export interface MiniProfileProps extends DivProps {
  profile: {
    avatarUrl: string,
    skinUrl: string,
    nickname: string,
    status: string
  },
  rank: {
    name: string,
    level: number
  },
  activity?: {
    previewUrl?: string,
    name: string,
    description: string,
    online?: {
      type: OnlineIndicatorType,
      min: number,
      max: number
    }
  }
}

export function MiniProfile({ profile, rank, activity, ...props }: MiniProfileProps) {
  return (
    <div
      {...props}
      className={classNames("miniProfile", props.className)}
    >
      <div className="miniProfile__inner">
        <div className="miniProfile__user">
          <img
            className="miniProfileUser__avatar"
            src={profile.avatarUrl}
            alt="mini profile avatar"
          />
          <div className="miniProfileUser__info">
            <span className="miniProfileUser__nickname">{profile.nickname}</span>
            <p className="miniProfileUser__status">{profile.status}</p>
          </div>
        </div>
        <div className="miniProfile__rank">
          <img
            className="miniProfileRank__icon"
            src={RankIcon}
            alt=""
          />
          <div className="miniProfileRank__info">
            <span className="miniProfileRank__name">{rank.name}</span>
            <p className="miniProfileRank__level">Уровень {rank.level}</p>
          </div>
          <Skin
            className="miniProfileRank__user"
            viewer={{
              width: 150,
              height: 270
            }}
            skinUrl={profile.skinUrl}
            rotateY={-0.5}
          />
        </div>
        {activity && (
          <div className="miniProfile__activity">
            <img
              className="miniProfileActivity__image"
              src={activity.previewUrl ? activity.previewUrl : ActivityIcon}
              alt=""
            />
            <div className="miniProfileActivity__info">
              <div className="miniProfileActivity__title">
                <span>{activity.name}</span>
                {activity.online && (
                  <div className="miniProfileActivity__online">
                    <OnlineIndicator type={activity.online.type} />
                    <span>{activity.online.min}/{activity.online.max}</span>
                  </div>
                )}
              </div>
              <p className="miniProfileActivity__description">{activity.description}</p>
            </div>
          </div>
        )}
      </div>
      <div className="miniProfile__backgroundMask" />
      <div className="miniProfile__backgroundImage" />
    </div>
  );
}