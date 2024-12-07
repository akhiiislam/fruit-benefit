import React from "react";

interface FontSizeAdjusterProps {
  fontSize: number;
  setFontSize: (size: number) => void;
}

export const FontSizeAdjuster: React.FC<FontSizeAdjusterProps> = ({
  fontSize,
  setFontSize,
}) => {
  return (
    <div className="space-y-2">
      <label
        htmlFor="font-size"
        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        Font Size
      </label>
      <input
        type="range"
        id="font-size"
        min="12"
        max="24"
        value={fontSize}
        onChange={(e) => setFontSize(Number(e.target.value))}
        className="w-full"
      />
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {fontSize}px
      </span>
    </div>
  );
};
