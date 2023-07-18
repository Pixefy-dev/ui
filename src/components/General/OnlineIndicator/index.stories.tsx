import * as React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { OnlineIndicator, OnlineIndicatorProps } from "./index";

const meta: Meta = {
  title: "Pixefy UI/General/OnlineIndicator",
  component: OnlineIndicator
};

export default meta;

const Template: StoryFn<OnlineIndicatorProps> = args => <OnlineIndicator {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Online = Template.bind({});

Online.args = {
  type: "online"
};

export const Offline = Template.bind({});

Offline.args = {
  type: "offline"
};
