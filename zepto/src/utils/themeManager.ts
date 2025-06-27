import type { TabThemeColors } from "../ThemeContext";

export const themeConfigs: Record<string, TabThemeColors> = {
  All: {
    gradientStart: "#b123e6",
    gradientEnd: "#8a1fd1",
    accent: "#b123e6",
    text: "#222",
    bg: "#fff",
  },
  Cafe: {
    gradientStart: "#8b4513",
    gradientEnd: "#654321",
    accent: "#8b4513",
    text: "#222",
    bg: "#fff",
  },
  Home: {
    gradientStart: "#ff6b35",
    gradientEnd: "#e55a2b",
    accent: "#ff6b35",
    text: "#222",
    bg: "#fff",
  },
  Toys: {
    gradientStart: "#4a90e2",
    gradientEnd: "#357abd",
    accent: "#4a90e2",
    text: "#222",
    bg: "#fff",
  },
  Fresh: {
    gradientStart: "#4caf50",
    gradientEnd: "#388e3c",
    accent: "#4caf50",
    text: "#222",
    bg: "#fff",
  },
  Electronics: {
    gradientStart: "#2196f3",
    gradientEnd: "#1976d2",
    accent: "#2196f3",
    text: "#222",
    bg: "#fff",
  },
  Mobile: {
    gradientStart: "#9c27b0",
    gradientEnd: "#7b1fa2",
    accent: "#9c27b0",
    text: "#222",
    bg: "#fff",
  },
  Beauty: {
    gradientStart: "#e91e63",
    gradientEnd: "#c2185b",
    accent: "#e91e63",
    text: "#222",
    bg: "#fff",
  },
  Fashion: {
    gradientStart: "#f44336",
    gradientEnd: "#d32f2f",
    accent: "#f44336",
    text: "#222",
    bg: "#fff",
  },
};

export const getThemeForTab = (tabName: string): TabThemeColors => {
  return themeConfigs[tabName] || themeConfigs.All;
};

export const applyThemeToDocument = (theme: TabThemeColors) => {
  const root = document.documentElement;

  // Apply CSS custom properties for the theme
  root.style.setProperty("--theme-gradient-start", theme.gradientStart);
  root.style.setProperty("--theme-gradient-end", theme.gradientEnd);
  root.style.setProperty("--theme-accent", theme.accent);
  root.style.setProperty("--theme-text", theme.text);
  root.style.setProperty("--theme-bg", theme.bg);
};
