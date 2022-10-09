import React, { FC, HTMLAttributes, ReactChild } from 'react';

import './index.scss';

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}

/**
 * A custom Thing component.
 */
export class Line extends React.Component<FC> {

  render() {
    return (
      <div className="line" onClick={() => console.log('line')}>
        <div className="children" onClick={() => console.log('child')}>
          dw
        </div>
      </div>
    );
  }

}