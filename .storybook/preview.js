import "src/style/_reset.css";
import "@/assets/fonts/minecraft/minecraftrus.css";

const customViewports = {
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
  laptop: {
    name: 'Laptop',
    styles: {
      width: '1440px',
      height: '1080px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1000px',
    },
  },
  mobile: {
    name: 'Mobile',
    styles: {
      width: '360px',
      height: '845px',
    },
  }
};

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  viewport: {
    viewports: customViewports
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#fff',
      },
      {
        name: 'dark',
        value: '#020B19',
      },
    ],
  }
};
