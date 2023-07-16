import * as React from "react";
import { Meta, Story } from "@storybook/react";

import { Input, InputProps } from "./index";

import SteveIcon from "@/assets/icons/steve.png";
import PaperIcon from "@/assets/icons/paper.svg";

const meta: Meta = {
  title: "Pixefy UI/General/Input",
  component: Input,
  argTypes: {
    status: {
      defaultValue: "default",
      table: {
        defaultValue: { summary: "default" }
      }
    },
    beforeIcon: {
      control: {
        type: "file",
        accept: ".png,.svg"
      }
    },
    afterIcon: {
      control: {
        type: "file",
        accept: ".png,.svg"
      }
    },
    disabled: {
      defaultValue: false,
      control: {
        type: "boolean"
      },
      table: {
        defaultValue: { summary: false }
      }
    }
  },
  parameters: {
    backgrounds: { default: "light" }
  }
};

export default meta;

const Template: Story<InputProps> = args => <Input {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

export const Success = Template.bind({});
Success.args = {
  status: "success"
};

export const Error = Template.bind({});
Error.args = {
  status: "error"
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const WithBefore = Template.bind({});
WithBefore.args = {
  beforeIcon: SteveIcon
};

export const WithAfter = Template.bind({});
WithAfter.args = {
  afterIcon: PaperIcon
};

export const WithBeforeAndAfter = Template.bind({});
WithBeforeAndAfter.args = {
  beforeIcon: SteveIcon,
  afterIcon: PaperIcon
};
