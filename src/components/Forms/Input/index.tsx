import React, { ReactNode } from "react";

import { Div } from "@/components/Blocks/LineWrapper/Div";

import classNames from "@/functions/classNames";

import { LineColor, LineSize } from "@/components/Blocks/LineWrapper/types";

import "./index.scss";

export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  status?: "default" | "success" | "error",
  align?: "left" | "center" | "right",
  before?: ReactNode,
  after?: ReactNode,
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
        return LineColor.LIGHT_GRAY;
      }

      if (isFocus) {
        return LineColor.BLUE;
      }
    }

    if (status === "error") {
      return LineColor.RED;
    }

    if (status === "success") {
      return LineColor.GREEN;
    }

    return LineColor.GRAY;
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
          size={LineSize.S}
          accentColor={this.color}
          disabled={disabled}
          stretched
        >
          <input
            className="input__inner"
            type="text"
            placeholder="Введите Email"
            {...this.props}
          />
        </Div>
      </label>
    );
  }
}