import type { Preview } from '@storybook/react'

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

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: customViewports
    },
    backgrounds: {
      default: 'dark',
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
  }
}

export default preview
