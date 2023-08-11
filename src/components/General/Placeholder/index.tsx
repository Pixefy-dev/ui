import classNames from "src/functions/classNames";

import { DivProps } from "react-html-props";

import "./index.scss";

export interface PlaceholderProps extends DivProps {
  icon: string,
  title: string,
  description: string
}

export default function Placeholder({ icon, title, description, ...props }: PlaceholderProps) {
  return (
    <div
      {...props}
      className={classNames("placeholder", props.className)}
    >
      <img
        className="placeholder__icon"
        src={icon}
        alt="placeholder icon"
      />
      <div className="placeholder__info">
        <p className="placeholder__title">{title}</p>
        <p className="placeholder__description">{description}</p>
      </div>
    </div>
  );
}
