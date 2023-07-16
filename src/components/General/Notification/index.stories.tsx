import * as React from "react";
import { Meta, Story } from "@storybook/react";

import { Notification } from "./index";

const meta: Meta = {
  title: "Pixefy UI/General/Notification",
  component: Notification
};

export default meta;

const Template: Story = args => <Notification {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
