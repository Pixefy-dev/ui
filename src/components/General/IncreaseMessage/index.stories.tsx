import * as React from "react";
import { Meta, Story } from "@storybook/react";

import { IncreaseMessage, IncreaseMessageProps } from "./index";

const meta: Meta = {
  title: "Pixefy UI/General/IncreaseMessage",
  component: IncreaseMessage,
  argTypes: {
    messages: {
      defaultValue: ["Pixefy", "Лаунчер"],
      control: {
        type: "array"
      },
      table: {
        defaultValue: {
          summary: ["Pixefy", "Лаунчер"]
        }
      }
    }
  },
  parameters: {
    backgrounds: { default: "dark" },
    controls: { expanded: true }
  }
};

export default meta;

const Template: Story<IncreaseMessageProps> = args => <IncreaseMessage {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
