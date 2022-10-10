import React, { FC, HTMLAttributes, ReactChild } from 'react';

import { LineWrapper } from "@/components/LineWrapper";

import './index.scss';

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}

/**
 * A custom Thing component.
 */
export class Button extends React.Component<FC> {

  render() {
    return (
      <LineWrapper>
        <button className="button">
          kekos
        </button>
      </LineWrapper>
    );
  }

}