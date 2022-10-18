import { Div } from "@/components/Blocks/LineWrapper/Div";
import { LineColor, LineSize } from "@/components/Blocks/LineWrapper/types";
import React from "react";

import "./index.scss";

export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export class Input extends React.Component<IProps, any> {
  render() {
    return (
      <Div
        {...this.props}
        size={LineSize.S}
        accentColor={LineColor.GRAY}
        stretched
      >
        <label className="input">
          <input className="input__inner" type="text" placeholder="Введите Email" />
        </label>
      </Div>
    );
  }
}