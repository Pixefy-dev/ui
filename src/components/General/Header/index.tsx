import React, { useEffect, useRef, useState } from "react";

import { IncreaseMessage } from "@/components/General/Splash";
import { Container } from "@/components/General/Container";

import classNames from "@/functions/classNames";

import Logo from "@/assets/icons/logo.png";
import News from "@/assets/icons/header/news.png";

import "./index.scss";

export interface HeaderProps {

}

export function Header(_: HeaderProps) {
  const [burgerHeight, setBurgerHeight] = useState<number>();
  const [burgerOpened, setBurgerOpened] = useState(false);

  const burgerMenu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!burgerMenu.current) {
      return;
    }

    setBurgerHeight(burgerMenu.current.clientHeight);
  }, []);

  return (
    <div className="header">
      <div className="header__main">
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
              <img className="menu__item__icon" src={News} alt="header icon" />
              <span>Новости</span>
            </a>
            <a className="header__menu__item" href="#">
              <img className="menu__item__icon" src={News} alt="header icon" />
              <span>Новости</span>
            </a>
            <a className="header__menu__item" href="#">
              <img className="menu__item__icon" src={News} alt="header icon" />
              <span>Новости</span>
            </a>
          </div>
          <div className="header__menu header__menuActions">
            <a className="header__menu__item" href="#">
              <img className="menu__item__icon" src={News} alt="header icon" />
              <span>Новости</span>
            </a>
          </div>
          <div
            className={classNames(
              "header__burgerIcon",
              burgerOpened && "header__burgerIconActive"
            )}
            onClick={() => setBurgerOpened(!burgerOpened)}
          >
            <div className="header__burgerIcon__line" />
            <div className="header__burgerIcon__line" />
            <div className="header__burgerIcon__line" />
            <div className="header__burgerIcon__line" />
          </div>
        </Container>
      </div>
      <div className="header__profile">
        <Container className="header__container">
          <div className="header__menu header__menuProfile">
            <a className="header__menu__item" href="#">
              <img className="menu__item__icon" src={News} alt="header icon" />
              <span>Новости</span>
            </a>
            <a className="header__menu__item" href="#">
              <img className="menu__item__icon" src={News} alt="header icon" />
              <span>Новости</span>
            </a>
            <a className="header__menu__item" href="#">
              <img className="menu__item__icon" src={News} alt="header icon" />
              <span>Новости</span>
            </a>
          </div>
        </Container>
      </div>
      <div
        className={classNames(
          "header__burgerMenu",
          burgerHeight && "header__burgerMenuLoaded"
        )}
        style={{ maxHeight: burgerHeight && (burgerOpened ? burgerHeight + "px" : "0px") }}
        ref={burgerMenu}
      >
        <div className="header__mainMobile">
          <div className="header__menu header__menuCatalogMobile">
            <a className="header__menu__item" href="#">
              <img className="menu__item__icon" src={News} alt="header icon" />
              <span>Новости</span>
            </a>
            <a className="header__menu__item" href="#">
              <img className="menu__item__icon" src={News} alt="header icon" />
              <span>Новости</span>
            </a>
            <a className="header__menu__item" href="#">
              <img className="menu__item__icon" src={News} alt="header icon" />
              <span>Новости</span>
            </a>
          </div>
        </div>
        <div className="header__profileMobile">
          <div className="header__menu header__menuProfileMobile">
            <a className="header__menu__item" href="#">
              <img className="menu__item__icon" src={News} alt="header icon" />
              <span>Новости</span>
            </a>
            <a className="header__menu__item" href="#">
              <img className="menu__item__icon" src={News} alt="header icon" />
              <span>Новости</span>
            </a>
            <a className="header__menu__item" href="#">
              <img className="menu__item__icon" src={News} alt="header icon" />
              <span>Новости</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
