import * as React from "react";
import { Meta, Story } from "@storybook/react";

import { LineColor, LineSize } from "@/components/Blocks/LineWrapper/types";

import { IProps, Div } from "./index";

const colorOptions = [undefined, ...Object.values(LineColor)];

const meta: Meta = {
  title: "Pixefy UI/Blocks/LineWrapper/Div",
  component: Div,
  argTypes: {
    size: {
      options: [...Object.values(LineSize)],
      defaultValue: "m",
      table: {
        defaultValue: { summary: "m" }
      }
    },
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
    stretched: {
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
    controls: { expanded: true }
  }
};

export default meta;

const Template: Story<IProps> = args => <Div {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
Default.parameters = {
  controls: {
    exclude: ["component", "disabled"]
  }
};
