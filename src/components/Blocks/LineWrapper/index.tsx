import React from "react";

import classNames from "@/functions/classNames";

import {
  LineWrapperButtonProps,
  LineWrapperDivProps,
  LineWrapperLinkProps
} from "@/components/Blocks/LineWrapper/types";

// import "./index.scss";

export type IProps = LineWrapperDivProps | LineWrapperButtonProps | LineWrapperLinkProps;

/**
 * A custom Thing component.
 */
export default function LineWrapper(props: IProps) {
  const {
    className,
    component: Component = "div",
    accentColor = "gray",
    hoverColor,
    activeColor,
    disabled = false,
    children
  } = props;

  /* TODO: Проблема приоритетов классов внутри css, т/к у каждого цвета есть свой accent, hover, active они перебивают
      друг друга, разделить accent, hover, active на отдельные под классы  */

  const LineWrapper = (
    <span
      className={classNames(
        "lineWrapper",
        `lineWrapper--accentColor-${accentColor}`,
        !disabled && (hoverColor && `lineWrapper--hoverColor-${hoverColor}`),
        !disabled && (activeColor && `lineWrapper--activeColor-${activeColor}`)
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
      {...props as object}
      className={classNames(
        "lineWrapper-type",
        `lineWrapper-type-${Component}`,
        className
      )}
    >
      {LineWrapper}
    </Component>
  );
}
