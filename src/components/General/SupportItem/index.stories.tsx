import * as React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { SupportItem, SupportItemProps } from "./index";

const meta: Meta = {
  title: "Pixefy UI/General/SupportItem",
  component: SupportItem,
  argTypes: {
    type: {
      options: ["outgoing", "incoming"],
      control: { type: "radio" }
    },
    avatarUrl: {
      control: {
        type: "file",
        accept: ".png"
      }
    }
  }
};

export default meta;

const Template: StoryFn<SupportItemProps> = args => <SupportItem {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Outgoing = Template.bind({});

Outgoing.args = {
  type: "outgoing",
  nickname: "Поддержка",
  time: "30 минут назад",
  message: "Привет, дорогой игрок! Здесь ты можешь задать любой вопроc связанный с игровым процессом и не только!",
  avatarUrl: "src/assets/icons/avatar.png"
};
export const Incoming = Template.bind({});

Incoming.args = {
  type: "incoming",
  nickname: "Поддержка",
  time: "30 минут назад",
  message: "Привет, дорогой игрок! Здесь ты можешь задать любой вопроc связанный с игровым процессом и не только!",
  avatarUrl: "src/assets/icons/avatar.png"
};
