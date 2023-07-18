import * as React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { Container, ContainerProps } from "./index";

const meta: Meta = {
  title: "Pixefy UI/General/Container",
  component: Container,
  argTypes: {
    children: {
      defaultValue: "Default",
      control: {
        type: "text"
      }
    }
  }
};

export default meta;

const Template: StoryFn<ContainerProps> = args => <Container {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
