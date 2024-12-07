import React from "react";

interface DarkModeToggleProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export const DarkModeToggle: React.FC<DarkModeToggleProps> = ({
  darkMode,
  setDarkMode,
}) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-1 rounded-full bg-gray-200 dark:bg-gray-600"
    >
      {darkMode ? "🌞" : "🌙"}
    </button>
  );
};
