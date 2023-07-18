import * as React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { Link, LinkProps } from "./index";

const meta: Meta = {
  title: "Pixefy UI/Blocks/LineWrapper/Link",
  component: Link,
  argTypes: {
    align: {
      table: {
        defaultValue: { summary: "center" }
      }
    },
    accentColor: {
      defaultValue: "gray",
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

const Template: StoryFn<LinkProps> = args => <Link {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  href: "#",
  align: "center",
  accentColor: "gray",
  children: "Default"
};
Default.parameters = {
  controls: {
    exclude: ["component"]
  }
};
