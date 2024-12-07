import React from "react";
import { FontSizeAdjuster } from "./FontSizeAdjuster";
import { VitaminTypeSelector } from "./VitaminTypeSelector";

interface SettingsPanelProps {
  fontSize: number;
  setFontSize: (size: number) => void;
  vitaminType: string;
  setVitaminType: (type: string) => void;
  showSettings: boolean;
  setShowSettings: (show: boolean) => void;
}

export const SettingsPanel: React.FC<SettingsPanelProps> = ({
  fontSize,
  setFontSize,
  vitaminType,
  setVitaminType,
  showSettings,
  setShowSettings,
}) => {
  return (
    <aside
      className={`w-64 h-52 bg-white mr-2 rounded-lg dark:bg-gray-800 overflow-y-auto dark:border-gray-700 ${
        showSettings ? "block" : "hidden"
      } md:block`}
    >
      <div className="p-2 space-y-1">
        <h2 className="text-gray-800 dark:text-white">Settings</h2>
        <FontSizeAdjuster fontSize={fontSize} setFontSize={setFontSize} />
        <VitaminTypeSelector
          vitaminType={vitaminType}
          setVitaminType={setVitaminType}
        />
      </div>
    </aside>
  );
};
