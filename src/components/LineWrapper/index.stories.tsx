import * as React from "react";

import { Meta, Story } from "@storybook/react";

import { LineColor } from "@/components/LineWrapper/types";

import { LineWrapper, IProps } from "./index";

const colorOptions = [undefined, ...Object.values(LineColor)];

const meta: Meta = {
  title: "Pixefy UI/LineWrapper",
  component: LineWrapper,
  argTypes: {
    accentColor: {
      options: colorOptions,
      defaultValue: "gray",
      table: {
        defaultValue: { summary: "gray" }
      }
    },
    hoverColor: {
      options: colorOptions
    },
    activeColor: {
      options: colorOptions
    },
    children: {
      control: {
        type: "text"
      }
    }
  },
  parameters: {
    controls: { expanded: true }
  }
};

export default meta;

const Template: Story<IProps> = args => (
  <LineWrapper {...args as any}>
    <div>{args.children}</div>
  </LineWrapper>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
