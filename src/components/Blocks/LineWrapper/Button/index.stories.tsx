import * as React from "react";
import { Meta, Story } from "@storybook/react";

import { Button, IProps } from "./index";

const meta: Meta = {
  title: "Pixefy UI/Blocks/LineWrapper/Button",
  component: Button,
  argTypes: {
    align: {
      table: {
        defaultValue: { summary: "center" }
      }
    },
    size: {
      table: {
        defaultValue: { summary: "m" }
      }
    },
    accentColor: {
      table: {
        defaultValue: { summary: "gray" }
      }
    },
    stretched: {
      defaultValue: false,
      control: {
        type: "boolean"
      },
      table: {
        defaultValue: { summary: false }
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
    },
    children: {
      defaultValue: "Default",
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

const Template: Story<IProps> = args => <Button {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});


Default.args = {};
Default.parameters = {
  controls: {
    exclude: ["component"]
  }
};
