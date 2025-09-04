import React, { useContext } from "react";
import { ThemeContext } from "./Themecontext.js";

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <h2>Current Theme {theme}</h2>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
    </div>
  );
}

export default ThemeSwitcher;
