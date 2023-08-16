import * as React from "react";
import { Meta, StoryFn } from "@storybook/react";

import Gallery, { GalleryProps } from "./index";

const meta: Meta = {
  title: "Pixefy UI/General/Gallery",
  component: Gallery
};

export default meta;

const Template: StoryFn<GalleryProps> = args => <Gallery {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  images: [
    "src/assets/icons/gallery_preview.jpg",
    "src/assets/icons/gallery_preview.jpg",
    "src/assets/icons/gallery_preview.jpg"
  ]
};

export const OneImage = Template.bind({});

OneImage.args = {
  images: [
    "src/assets/icons/gallery_preview.jpg"
  ]
};

export const TwoImages = Template.bind({});

TwoImages.args = {
  images: [
    "src/assets/icons/gallery_preview.jpg",
    "src/assets/icons/gallery_preview.jpg"
  ]
};

export const MoreImages = Template.bind({});

MoreImages.args = {
  images: [
    "src/assets/icons/gallery_preview.jpg",
    "src/assets/icons/gallery_preview.jpg",
    "src/assets/icons/gallery_preview.jpg",
    "src/assets/icons/gallery_preview.jpg",
    "src/assets/icons/gallery_preview.jpg",
    "src/assets/icons/gallery_preview.jpg"
  ]
};
