import * as React from "react";
import { Meta, StoryFn } from "@storybook/react";

import Placeholder , { PlaceholderProps } from "./index";

const meta: Meta = {
  title: "Pixefy UI/General/Placeholder",
  component: Placeholder
};

export default meta;

const Template: StoryFn<PlaceholderProps> = args => <Placeholder {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  icon: "src/assets/icons/placeholder.png",
  title: "Ничего не найдено",
  description: "Еще никто не оставлял данный тег к какому-либо скину"
};
