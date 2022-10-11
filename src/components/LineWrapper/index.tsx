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
  className?: string;
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
  classNamePriority() {
    const { activeColor, hoverColor } = this.props;

    const colors = Object.values(LineColor);

    let hoverPriority = 0;
    let activePriority = 0;

    console.log(colors);

    if (hoverColor) {
      hoverPriority = colors.indexOf(hoverColor);
    }

    if (activeColor) {
      activePriority = colors.indexOf(activeColor);
    }

    if (hoverPriority >= activePriority) {
      return (
        `lineWrapper-activeColor-${activeColor}` +
        " " +
        `lineWrapper-hoverColor-${hoverColor}`
      );
    } else {
      return (
        `lineWrapper-hoverColor-${hoverColor}` +
        " " +
        `lineWrapper-activeColor-${activeColor}`
      );
    }

    return "";
  }

  render() {
    const { className, accentColor = LineColor.GRAY, children } = this.props;

    /* TODO: Проблема приоритетов классов внутри css, т/к у каждого цвета есть свой accent, hover, active они перебивают
        друг друга, разделить accent, hover, active на отдельные под классы  */

    return (
      <div
        className={classNames(
          "lineWrapper",
          `lineWrapper-accentColor-${accentColor}`,
          // hoverColor && `lineWrapper-hoverColor-${hoverColor}`,
          // activeColor && `lineWrapper-activeColor-${activeColor}`,
          this.classNamePriority(),
          className
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
