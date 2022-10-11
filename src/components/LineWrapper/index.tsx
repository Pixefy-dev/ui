import React, { ReactElement } from "react";

import classNames from "@/functions/classNames";

import "./index.scss";

export enum LineColor {
  GREEN = "green",
  GRAY = "gray",
  YELLOW = "yellow",
  BLUE = "blue",
  PURPLE = "purple",
  RED = "red"
}

export interface IProps {
  accentColor?: LineColor;
  hoverColor?: LineColor;
  activeColor?: LineColor;
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children: ReactElement;
}

interface IState {
  hover: boolean;
}

/**
 * A custom Thing component.
 */
export class LineWrapper extends React.Component<IProps, IState> {
  render() {
    const {
      accentColor = LineColor.GRAY,
      activeColor,
      hoverColor,
      children
    } = this.props;

    return (
      <div
        className={classNames(
          "lineWrapper",
          `lineWrapper-accentColor-${accentColor}`,
          hoverColor && `lineWrapper-hoverColor-${hoverColor}`,
          activeColor && `lineWrapper-activeColor-${activeColor}`
        )}
      >
        <div className="lineWrapper__lines">
          <div className="lineWrapper__lines__top"></div>
          <div className="lineWrapper__lines__bottom"></div>
          <div className="lineWrapper__lines__sides"></div>
          <div className="lineWrapper__lines__front"></div>
        </div>
        {React.cloneElement(children, {
          className: classNames(
            "lineWrapper__children",
            children.props.className
          )
        })}
      </div>
    );
  }
}
