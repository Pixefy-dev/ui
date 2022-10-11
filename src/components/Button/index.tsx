import React, { ReactElement } from "react";

import { LineWrapper, LineColor } from "@/components/LineWrapper";

import "./index.scss";

export interface IProps {
  accentColor?: LineColor;
  hoverColor?: LineColor;
  activeColor?: LineColor;
  children?: ReactElement;
}

/**
 * A custom Thing component.
 */
export class Button extends React.Component<IProps> {
  render() {
    const { accentColor, hoverColor, activeColor } = this.props;

    return (
      <LineWrapper
        accentColor={accentColor}
        hoverColor={hoverColor}
        activeColor={activeColor}
      >
        <button className="button">kekos</button>
      </LineWrapper>
    );
  }
}
