import * as React from "react";
import { Meta, Story } from "@storybook/react";

import { Block } from "./index";

const meta: Meta = {
  title: "Pixefy UI/General/Block",
  component: Block,
  argTypes: {
    children: {
      defaultValue: "Default",
      control: {
        type: "text"
      }
    }
  }
};

export default meta;

const Template: Story = args => <Block {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
