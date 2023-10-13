import type { Preview } from "@storybook/react";
import "./../src/styles/_style.scss";


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    
    viewport: {
      defaultViewport: {
        styles: {
          padding: '64px',
          maxWidth: '100%',
          fontFamily:  `"inter var", -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";`
        },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;



