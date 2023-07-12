import React from "react";

import { Container } from "@/components/General/Container";

import "./index.scss";

export function Footer() {
  return (
    <div className="footer">
      <Container className="footer__container">
        <a className="footer__link" href="#">© 2023 Pixefy #b034e18</a>
        <div className="footer__privacy">
          <a className="footer__link" href="#">Политика Конфиденциальности</a>
          <a className="footer__link" href="#">Лицензионное соглашение</a>
        </div>
        <a className="footer__link" href="#">RU</a>
      </Container>
    </div>
  );
}
