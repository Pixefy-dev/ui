import React from "react";

import { IncreaseMessage } from "@/components/General/IncreaseMessage";

import Logo from "@/assets/icons/logo.png";
import News from "@/assets/icons/header/news.png";

import "./index.scss";
import { Container } from "@/components/General/Container";

export interface HeaderProps {

}

export function Header(_: HeaderProps) {
  return (
    <div className="header">
      <Container className="header__container">
        <a className="header__logo" href="/">
          <img src={Logo} alt="logo" />
        </a>
        <IncreaseMessage
          className="header__message"
          messages={[
            "Живу на Харкоре"
          ]}
        />
        <div className="header__menu header__menuCatalog">
          <a className="header__menu__item" href="#">
            <img src={News} alt="header icon" />
            <span>Новости</span>
          </a>
          <a className="header__menu__item" href="#">
            <img src={News} alt="header icon" />
            <span>Новости</span>
          </a>
          <a className="header__menu__item" href="#">
            <img src={News} alt="header icon" />
            <span>Новости</span>
          </a>
        </div>
        <div className="header__menu header__menuActions">
          <a className="header__menu__item" href="#">
            <img src={News} alt="header icon" />
            <span>Новости</span>
          </a>
        </div>
      </Container>
    </div>
  );
}