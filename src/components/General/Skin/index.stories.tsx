import * as React from "react";
import { Meta, Story } from "@storybook/react";

import { Skin, SkinProps } from "./index";

const meta: Meta = {
  title: "Pixefy UI/General/Skin",
  component: Skin
};

export default meta;

const Template: Story<SkinProps> = args => <Skin {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  type: "image",
  viewer: {
    width: 150,
    height: 270
  },
  skinUrl: "src/assets/icons/skin.png"
};
