"use client";

import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { DarkModeToggle } from "./DarkModeToggle";
import { Dispatch, SetStateAction } from "react";

interface NavBarProps {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
  showSettings: boolean;
  setShowSettings: Dispatch<SetStateAction<boolean>>;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

export function NavBar({
  darkMode,
  setDarkMode,
  showSidebar,
  setShowSidebar,
  showSettings,
  setShowSettings,
  setSearchQuery,
}: NavBarProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src="foodnetwork.png" alt="" height={35} width={35} />
        <div className="relative flex-1 max-w-xl mx-auto">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search Best Food"
            className="pl-8 bg-muted/50"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex items-center space-x-4">
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <button
            className="md:hidden"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            Menu
          </button>
          <button
            className="md:hidden"
            onClick={() => setShowSettings(!showSettings)}
          >
            Settings
          </button>
        </div>
      </div>
    </div>
  );
}
