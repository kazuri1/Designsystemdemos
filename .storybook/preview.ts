import type { Preview } from "@storybook/react-vite";

export const globalTypes = {
  brand: {
    name: "Brand",
    description: "Global brand for components",
    defaultValue: "pulse",
    toolbar: {
      icon: "star",
      items: [
        { value: "pulse", title: "Pulse" },
        { value: "1mg", title: "1mg" },
      ],
      showName: true,
    },
  },
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

const themeCssMap: Record<string, Record<string, string>> = {
  pulse: {
    light: "/src/styles/themes/default-light.css",
    dark: "/src/styles/themes/default-dark.css",
  },
  "1mg": {
    light: "/src/styles/themes/1mg-light.css",
    dark: "/src/styles/themes/1mg-dark.css",
  },
};

function setBrandTheme(brand: string, theme: string) {
  // Remove any previously injected theme link
  const existing = document.getElementById("theme-css");
  if (existing) existing.remove();

  // Inject the correct theme CSS
  const link = document.createElement("link");
  link.id = "theme-css";
  link.rel = "stylesheet";
  link.href = themeCssMap[brand][theme];
  document.head.appendChild(link);

  // Set body class for dark mode if needed
  document.body.classList.toggle("dark", theme === "dark");
}

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
        setBrandTheme(context.globals.brand, context.globals.theme);
        document.body.style.backgroundColor =
          context.globals.theme === "dark" ? "#000" : "#fff";
      }
      return Story();
    },
  ],
};

export default preview;
