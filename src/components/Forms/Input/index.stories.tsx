import * as React from "react";
import { Meta, Story } from "@storybook/react";

import Email from "@/assets/icons/email.png";

import { IProps, Input } from "./index";

const meta: Meta = {
  title: "Pixefy UI/Forms/Input",
  component: Input,
  argTypes: {
    status: {
      defaultValue: "default",
      table: {
        defaultValue: { summary: "default" }
      }
    },
    align: {
      defaultValue: "left",
      table: {
        defaultValue: { summary: "left" }
      }
    },
    before: {
      description: "Add icon on left side, tsx element or simple html tag like `<img src={Email} alt='' />`"
    },
    after: {
      description: "Add icon on left side, tsx element or simple html tag like `<img src={Email} alt='' />`"
    },
    disabled: {
      defaultValue: false,
      control: {
        type: "boolean"
      },
      table: {
        defaultValue: { summary: false }
      }
    },
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

export const WithBefore = Template.bind({});

WithBefore.args = {
  before: <img src={Email} alt="" />
};
