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
      className={`w-64 bg-gray-100 dark:bg-gray-800 overflow-y-auto border-l border-gray-200 dark:border-gray-700 ${
        showSettings ? "block" : "hidden"
      } md:block`}
    >
      <div className="p-4 space-y-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          Settings
        </h2>
        <FontSizeAdjuster fontSize={fontSize} setFontSize={setFontSize} />
        <VitaminTypeSelector
          vitaminType={vitaminType}
          setVitaminType={setVitaminType}
        />
      </div>
    </aside>
  );
};
