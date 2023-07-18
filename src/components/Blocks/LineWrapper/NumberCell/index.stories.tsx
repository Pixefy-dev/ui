import * as React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { NumberCell, NumberCellProps } from "./index";

const meta: Meta = {
  title: "Pixefy UI/Blocks/LineWrapper/NumberCell",
  component: NumberCell,
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
    }
  }
};

export default meta;

const Template: StoryFn<NumberCellProps> = args => <NumberCell {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  accentColor: "gray",
  children: "1"
};

Default.parameters = {
  controls: {
    exclude: ["component"]
  }
};
