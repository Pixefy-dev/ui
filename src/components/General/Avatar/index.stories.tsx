import * as React from "react";
import { Meta, StoryFn } from "@storybook/react";

import Avatar, { AvatarProps } from "./index";

const meta: Meta = {
  title: "Pixefy UI/General/Avatar",
  component: Avatar
};

export default meta;

const Template: StoryFn<AvatarProps> = args => <Avatar {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  src: "src/assets/icons/avatar.png",
  size: [50, 45, 40, 35]
};
