import type { Preview } from "@storybook/react-vite";
import "../src/styles/themes/default-light.css";
import "../src/styles/themes/default-dark.css";

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "light", title: "Light" },
        { value: "dark", title: "Dark" },
      ],
      showName: true,
    },
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  decorators: [
    (Story, context) => {
      if (typeof window !== "undefined") {
        document.body.classList.toggle(
          "dark",
          context.globals.theme === "dark"
        );
        document.body.style.backgroundColor =
          context.globals.theme === "dark" ? "#000" : "#fff";
      }
      return Story();
    },
  ],
};

export default preview;
