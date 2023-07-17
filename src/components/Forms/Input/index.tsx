import React, { useMemo, useState } from "react";

import classNames from "src/functions/classNames";

import { InputProps as DefaultInputProps } from "react-html-props";

import "src/components/Forms/Input/index.scss";

export interface InputProps extends DefaultInputProps {
  status?: "default" | "success" | "error",
  beforeIcon?: string,
  afterIcon?: string
}

export function Input(
  {
    status = "default",
    beforeIcon,
    afterIcon,
    disabled,
    ...props
  }: InputProps
) {

  const [focus, setFocus] = useState(false);
  const [hover, setHover] = useState(false);

  const handleHover = () => setHover((value) => !value);
  const handleFocus = () => setFocus((value) => !value);

  const color = useMemo(() => {
    if (!disabled) {
      if (hover && !focus) {
        return "hover";
      }

      if (focus) {
        return "focus";
      }
    }

    if (status === "error") {
      return "error";
    }

    if (status === "success") {
      return "success";
    }

    return "default";
  }, [focus, hover, status, disabled]);

  return (
    <label
      className={classNames(
        "input",
        `inputStyle_${color}`,
        disabled && "inputDisabled",
        beforeIcon && "inputPadding_before",
        afterIcon && "inputPadding_after"
      )}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onFocus={handleFocus}
      onBlur={handleFocus}
    >
      {beforeIcon && (
        <div className="input__icon input__before">
          <img src={beforeIcon} alt="input before icon" />
        </div>
      )}

      <input
        className="input__field"
        placeholder="Email или никнейм"
        {...props}
      />

      {afterIcon && (
        <div className="input__icon input__after">
          <img src={afterIcon} alt="input before icon" />
        </div>
      )}
    </label>
  );
}