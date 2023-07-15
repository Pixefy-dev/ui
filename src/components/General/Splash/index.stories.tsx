import * as React from "react";
import { Meta, Story } from "@storybook/react";

import { Splash, SplashProps } from "./index";

const meta: Meta = {
  title: "Pixefy UI/General/Splash",
  component: Splash,
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
  }
};

export default meta;

const Template: Story<SplashProps> = args => <Splash {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
