import classNames from "src/functions/classNames";

import PlayIcon from "src/assets/icons/play.svg";

import "./index.scss";

export interface GalleryProps {
  type?: "image" | "video",
  images: [string, string, string, ...string]
}

export default function Gallery({ type = "image", images }: GalleryProps) {
  return (
    <div className={classNames(
      "gallery",
      `galleryCount_${images.length > 2 ? "more" : images.length}`
    )}>
      {images.slice(0, images.length > 3 ? 2 : 3).map((src, index) => (
        <div
          className={classNames(
            "gallery__preview",
            index === 0 && "gallery__previewMain"
          )}
          key={src + index}
        >
          {type === "video" && (
            <div className="gallery__preview__overlay">
              <img src={PlayIcon} alt="" />
            </div>
          )}
          <img
            className="gallery__image"
            src={src}
            alt="gallery image"
          />
        </div>
      ))}
      {images.length > 3 && (
        <div className="gallery__showMore">
          <div className="gallery__showMore__overlay">
            +{images.length - 2}
          </div>
          <img
            className="gallery__image"
            src={images[2]}
            alt="small gallery image"
          />
        </div>
      )}
      {/*<div className="gallery__smallImages">*/}
      {/*  <img*/}
      {/*    className="gallery__smallImage"*/}
      {/*    src={second}*/}
      {/*    alt="small gallery image"*/}
      {/*  />*/}
      {/*  <img*/}
      {/*    className="gallery__smallImage"*/}
      {/*    src={second}*/}
      {/*    alt="small gallery image"*/}
      {/*  />*/}
      {/*  <div className="gallery__showImages">*/}
      {/*    <img*/}
      {/*      className="gallery__smallImage"*/}
      {/*      src={third}*/}
      {/*      alt="small gallery image"*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
}
