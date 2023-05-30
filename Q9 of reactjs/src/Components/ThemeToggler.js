import React, { useContext } from "react";
import ThemeContext from "../Context/themeContext";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <div
      onClick={() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}
    >
      <button
        style={{
          cursor: "pointer",
        }}
      >
        {themeMode === "light" ? "Turn Off" : "Lights On"}
      </button>
    </div>
  );
};

export default ThemeToggler;
