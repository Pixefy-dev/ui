import { useEffect, useState } from "react";
import { ImgProps } from "react-html-props";

import { screenMd, screenSm, screenXs } from "src/script/adaptive";

export interface AvatarProps extends ImgProps {
  size: [number, number, number, number]
}

export default function Avatar(props: AvatarProps) {

  const calculateSize = () => {
    if (width <= screenXs) {
      return props.size[3];
    }

    if (width <= screenSm) {
      return props.size[2];
    }

    if (width <= screenMd) {
      return props.size[1];
    }

    return props.size[0];
  };

  const [width, setWidth] = useState(parent.innerWidth);
  const [size, setSize] = useState(() => calculateSize());

  useEffect(() => {
    addEventListener("resize", handleResize);
    return () => removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setSize(calculateSize());
  }, [width]);

  const handleResize = () => {
    const width = parent.innerWidth;
    setWidth(width);
  };

  return (
    <img
      alt="avatar"
      {...props}
      style={{
        width: size,
        height: size,
        ...props.style
      }}
    />
  );
}
