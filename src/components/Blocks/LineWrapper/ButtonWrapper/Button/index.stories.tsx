import * as React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { Button, ButtonProps } from "./index";

const meta: Meta = {
  title: "Pixefy UI/Blocks/LineWrapper/Button",
  component: Button,
  argTypes: {
    align: {
      table: {
        defaultValue: { summary: "center" }
      }
    },
    accentColor: {
      table: {
        defaultValue: { summary: "gray" }
      }
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

const Template: StoryFn<ButtonProps> = args => <Button {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  align: "center",
  accentColor: "gray",
  children: "Default"
};

Default.parameters = {
  controls: {
    exclude: ["component"]
  }
};
