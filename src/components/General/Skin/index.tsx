import React, { useRef } from "react";
import { SkinViewer } from "skinview3d";

import { CanvasProps, ImgProps } from "react-html-props";
import { SkinViewerOptions } from "skinview3d/libs/viewer";
import { useAsyncEffect } from "src/hooks/useAsyncEffect";

interface SkinPropsDefault {
  type?: "image" | "canvas",
  viewer: SkinViewerOptions,
  skinUrl?: string,
  position?: {
    x?: number,
    y?: number,
    z?: number
  },
  rotateY?: number
}

export interface SkinPropsCanvas extends SkinPropsDefault, CanvasProps {
  type: "canvas"
}

export interface SkinPropsImage extends SkinPropsDefault, ImgProps {
  type?: "image"
}

export type SkinProps = SkinPropsCanvas | SkinPropsImage;

export function Skin(props: SkinProps) {

  const {
    type = "canvas"
  } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useAsyncEffect(async () => {
    const skinViewer = new SkinViewer({
      canvas: (type === "canvas" && canvasRef?.current) ? canvasRef.current : undefined,
      ...props.viewer,
      renderPaused: type === "image"
    });

    await skinViewer.loadSkin(props.skinUrl || "");

    const {
      x = 0,
      y = 5,
      z = 55
    } = props.position || {};

    skinViewer.camera.position.x = x;
    skinViewer.camera.position.y = y;
    skinViewer.camera.position.z = z;

    skinViewer.playerObject.rotation.y = props.rotateY || 0;

    skinViewer.playerObject.skin.leftArm.rotation.x = 0.3;
    skinViewer.playerObject.skin.rightArm.rotation.x = -0.3;
    skinViewer.playerObject.skin.leftLeg.rotation.x = -0.3;
    skinViewer.playerObject.skin.rightLeg.rotation.x = 0.3;

    if (type === "image") {
      if (!imageRef?.current) {
        return;
      }

      skinViewer.render();

      imageRef.current.src = skinViewer.canvas.toDataURL();
      imageRef.current.width = skinViewer.width;
      imageRef.current.height = skinViewer.height;

      skinViewer.dispose();
    }
  }, [props.type]);

  if (type === "image") {
    return (
      <img alt="" {...props as SkinPropsImage} ref={imageRef} />
    );
  }

  return (
    <canvas {...props as SkinPropsCanvas} ref={canvasRef}/>
  );
}