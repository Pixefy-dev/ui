import * as React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { Header, HeaderProps } from "./index";

const meta: Meta = {
  title: "Pixefy UI/General/Header",
  component: Header
};

export default meta;

const Template: StoryFn<HeaderProps> = args => <Header {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
