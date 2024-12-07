import React from "react";
import { FontSizeAdjuster } from "./FontSizeAdjuster";
import { VitaminTypeSelector } from "./VitaminTypeSelector";

interface SettingsPanelProps {
  fontSize: number;
  setFontSize: (size: number) => void;
  vitaminType: string;
  setVitaminType: (type: string) => void;
  availableVitamins: string[];
}

export const SettingsPanel: React.FC<SettingsPanelProps> = ({
  fontSize,
  setFontSize,
  vitaminType,
  setVitaminType,
  availableVitamins,
}) => {
  return (
    <aside
      className={`w-full md:w-64 h-52 bg-white mr-2 rounded-lg dark:bg-gray-800 overflow-y-auto dark:border-gray-700 md:block mb-4 md:mb-0`}
    >
      <div className="p-2 space-y-1">
        <h2 className="text-gray-800 dark:text-white">Settings</h2>
        <FontSizeAdjuster fontSize={fontSize} setFontSize={setFontSize} />
        <VitaminTypeSelector
          vitaminType={vitaminType}
          setVitaminType={setVitaminType}
          availableVitamins={availableVitamins}
        />
      </div>
    </aside>
  );
};
