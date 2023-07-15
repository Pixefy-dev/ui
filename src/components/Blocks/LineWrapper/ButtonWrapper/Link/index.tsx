import React from "react";
import {
  ButtonWrapper,
  ButtonWrapperLinkProps
} from "@/components/Blocks/LineWrapper/ButtonWrapper";

export interface LinkProps extends ButtonWrapperLinkProps {}

export function Link(props: LinkProps) {
  return (
    <ButtonWrapper {...props} component="a" />
  );
}