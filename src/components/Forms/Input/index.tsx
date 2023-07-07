import React, { ReactElement } from "react";

import { Div } from "@/components/Blocks/LineWrapper/Div";

import classNames from "@/functions/classNames";

import "./index.scss";

export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  status?: "default" | "success" | "error",
  align?: "left" | "center" | "right",
  before?: ReactElement,
  after?: ReactElement,
  disabled?: boolean
}

interface IState {
  isHover: boolean,
  isFocus: boolean
}

export class Input extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);

    this.state = {
      isHover: false,
      isFocus: false
    };

    this.handleHover = this.handleHover.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  get color() {
    const { status, disabled } = this.props;
    const { isHover, isFocus } = this.state;

    if (!disabled) {
      if (isHover && !isFocus) {
        return "gray";
      }

      if (isFocus) {
        return "blue";
      }
    }

    if (status === "error") {
      return "red";
    }

    if (status === "success") {
      return "green";
    }

    return "gray";
  }

  handleHover() {
    this.setState((state) => ({
      isHover: !state.isHover
    }));
  }

  handleFocus() {
    this.setState((state) => ({
      isFocus: !state.isFocus
    }));
  }

  render() {
    const {
      before,
      after,
      align = "left",
      disabled = false,
    } = this.props;

    return (
      <label
        className="input"
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
        onFocus={this.handleFocus}
        onBlur={this.handleFocus}
      >
        <Div
          className={classNames(
            `input--align-${align}`,
            disabled && "input--disabled"
          )}
          accentColor={this.color}
          disabled={disabled}
        >
          <div className="input__wrapper">
            {before && (
              <div className="input__before">
                {before}
              </div>
            )}
            <input
              className={classNames(
                "input__inner",
                before && "input--hasBefore",
                after && "input--hasAfter",
              )}
              type="text"
              placeholder="Введите Email"
              {...this.props}
            />
            {after && (
              <div className="input__after">
                {after}
              </div>
            )}
          </div>
        </Div>
      </label>
    );
  }
}