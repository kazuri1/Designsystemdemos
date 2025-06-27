import React, { createContext, useContext, useState, useEffect } from "react";

type ThemeName = "supersaver-on" | "supersaver-off";

export interface TabThemeColors {
  gradientStart: string;
  gradientEnd: string;
  accent: string;
  text: string;
  bg: string;
}

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  currentTabTheme: TabThemeColors;
  setTabTheme: (theme: TabThemeColors) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const defaultTabTheme: TabThemeColors = {
  gradientStart: "#b123e6",
  gradientEnd: "#8a1fd1",
  accent: "#b123e6",
  text: "#222",
  bg: "#fff",
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "supersaver-off",
  setTheme: () => {},
  currentTabTheme: defaultTabTheme,
  setTabTheme: () => {},
  activeTab: "All",
  setActiveTab: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeName>("supersaver-off");
  const [currentTabTheme, setCurrentTabTheme] =
    useState<TabThemeColors>(defaultTabTheme);
  const [activeTab, setActiveTab] = useState<string>("All");

  useEffect(() => {
    document.body.classList.remove(
      "theme-supersaver-on",
      "theme-supersaver-off"
    );
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  const setTabTheme = (tabTheme: TabThemeColors) => {
    setCurrentTabTheme(tabTheme);
    // Apply CSS custom properties for the tab theme
    const root = document.documentElement;
    root.style.setProperty("--theme-gradient-start", tabTheme.gradientStart);
    root.style.setProperty("--theme-gradient-end", tabTheme.gradientEnd);
    root.style.setProperty("--theme-accent", tabTheme.accent);
    root.style.setProperty("--theme-text", tabTheme.text);
    root.style.setProperty("--theme-bg", tabTheme.bg);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        currentTabTheme,
        setTabTheme,
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
