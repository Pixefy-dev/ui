import React from "react";
import {
  ButtonWrapper,
  ButtonWrapperButtonProps
} from "src/components/Blocks/LineWrapper/ButtonWrapper";

export interface ButtonProps extends ButtonWrapperButtonProps {}

export function Button(props: ButtonProps) {
  return (
    <ButtonWrapper {...props} component="button" />
  );
}