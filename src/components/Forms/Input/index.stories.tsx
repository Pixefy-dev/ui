import * as React from "react";
import { Meta, Story } from "@storybook/react";

import { IProps, Input } from "./index";

const meta: Meta = {
  title: "Pixefy UI/Forms/Input",
  component: Input,
  argTypes: {
  },
  parameters: {
    controls: { expanded: true }
  }
};

export default meta;

const Template: Story<IProps> = args => <Input {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
Default.parameters = {
  controls: {
    exclude: []
  }
};
