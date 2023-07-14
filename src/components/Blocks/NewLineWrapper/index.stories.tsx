import * as React from "react";
import { Meta, Story } from "@storybook/react";

import { LineWrapper, LineWrapperProps } from "./index";

const meta: Meta = {
  title: "Pixefy UI/Blocks/LineWrapper",
  component: LineWrapper,
  argTypes: {
    accentColor: {
      defaultValue: "gray",
      table: {
        defaultValue: { summary: "gray" }
      }
    },
    children: {
      defaultValue: "Default",
      control: {
        type: "text"
      }
    },
    component: {
      options: ["a", "div", "button"],
      control: { type: "radio" },
      defaultValue: "div"
    }
  }
};

export default meta;

const Template: Story<LineWrapperProps> = args => <LineWrapper {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
