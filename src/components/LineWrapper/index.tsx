import React from "react";

import classNames from "@/functions/classNames";

import { LineColor, LineWrapperDefaultProps } from "@/components/LineWrapper/types";

import "./index.scss";

interface DivProps extends LineWrapperDefaultProps, React.ComponentProps<"div"> {
  component: "div"
}

interface ButtonProps extends LineWrapperDefaultProps, React.ComponentProps<"button"> {
  component: "button"
}

interface LinkProps extends LineWrapperDefaultProps, React.ComponentProps<"a"> {
  component: "a"
}

export type IProps = DivProps | ButtonProps | LinkProps;

interface IState {
  hover: boolean;
}

/**
 * A custom Thing component.
 */
export class LineWrapper extends React.Component<IProps, IState> {
  render() {
    const {
      className,
      component: Component = "div",
      // size = LineSize.M,
      accentColor = LineColor.GRAY,
      hoverColor,
      activeColor,
      children
    } = this.props;

    /* TODO: Проблема приоритетов классов внутри css, т/к у каждого цвета есть свой accent, hover, active они перебивают
        друг друга, разделить accent, hover, active на отдельные под классы  */

    const LineWrapper = (
      <span
        className={classNames(
          "lineWrapper",
          `lineWrapper-accentColor-${accentColor}`,
          hoverColor && `lineWrapper-hoverColor-${hoverColor}`,
          activeColor && `lineWrapper-activeColor-${activeColor}`
        )}
      >
        <span className="lineWrapper__lines">
          <span className="lineWrapper__lines__top"></span>
          <span className="lineWrapper__lines__bottom"></span>
          <span className="lineWrapper__lines__sides"></span>
          <span className="lineWrapper__lines__front"></span>
        </span>

        {React.isValidElement(children) ? (
          React.cloneElement(children, {
            ...children.props,
            className: classNames(
              "lineWrapper__children",
              children.props.className
            )
          })
        ) : (
          <span className="lineWrapper__children">
            {children}
          </span>
        )}
      </span>
    );

    return (
      <Component
        {...this.props as object}
        className={classNames(
          "lineWrapper-type",
          `lineWrapper-type-${Component}`,
          // `lineWrapper-size-${size}`,
          className
        )}
      >
        {LineWrapper}
      </Component>
    );
  }
}
