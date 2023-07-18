import * as React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { MiniProfile, MiniProfileProps } from "./index";

const meta: Meta = {
  title: "Pixefy UI/General/MiniProfile",
  component: MiniProfile
};

export default meta;

const Template: StoryFn<MiniProfileProps> = args => <MiniProfile {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  profile: {
    avatarUrl: "src/assets/icons/avatar.png",
    skinUrl: "src/assets/icons/skin.png",
    nickname: "H4kt",
    status: "На сайте"
  },
  rank: {
    name: "Незерит",
    level: 35
  }
};

export const WithActivity = Template.bind({});

WithActivity.args = {
  profile: {
    avatarUrl: "src/assets/icons/avatar.png",
    skinUrl: "src/assets/icons/skin.png",
    nickname: "H4kt",
    status: "На сайте"
  },
  rank: {
    name: "Незерит",
    level: 35
  },
  activity: {
    name: "Одиночная игра",
    description: "Сервер от создателей лаунчера"
  }
};

export const WithActivityOnline = Template.bind({});

WithActivityOnline.args = {
  profile: {
    avatarUrl: "src/assets/icons/avatar.png",
    skinUrl: "src/assets/icons/skin.png",
    nickname: "H4kt",
    status: "На сайте"
  },
  rank: {
    name: "Незерит",
    level: 35
  },
  activity: {
    name: "Одиночная игра",
    description: "Сервер от создателей лаунчера",
    online: {
      type: "online",
      min: 10,
      max: 100
    }
  }
};

export const WithActivityOffline = Template.bind({});

WithActivityOffline.args = {
  profile: {
    avatarUrl: "src/assets/icons/avatar.png",
    skinUrl: "src/assets/icons/skin.png",
    nickname: "H4kt",
    status: "На сайте"
  },
  rank: {
    name: "Незерит",
    level: 35
  },
  activity: {
    name: "Одиночная игра",
    description: "Сервер от создателей лаунчера",
    online: {
      type: "offline",
      min: 10,
      max: 100
    }
  }
};
