import React from "react";

interface VitaminTypeSelectorProps {
  vitaminType: string;
  setVitaminType: (type: string) => void;
  availableVitamins: string[];
}

export const VitaminTypeSelector: React.FC<VitaminTypeSelectorProps> = ({
  vitaminType,
  setVitaminType,
  availableVitamins,
}) => {
  return (
    <div className="space-y-2">
      <label
        htmlFor="vitamin-type"
        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        Vitamin Type
      </label>
      <select
        id="vitamin-type"
        value={vitaminType}
        onChange={(e) => setVitaminType(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        {availableVitamins.map((vitamin) => (
          <option key={vitamin} value={vitamin}>
            {vitamin}
          </option>
        ))}
      </select>
    </div>
  );
};
