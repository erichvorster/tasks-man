import React, { useState } from "react";

const colors = [
  "#ef4444", // Red
  "#f59e0b", // Orange
  "#84cc16", // Yellow
  "#10b981", // Green
  "#06b6d4", // Blue
  "#3b82f6", // Indigo
  "#8b5cf6", // Violet
  "#d946ef", // White
  "#f43f5e", // Black
  "#6b7280", // Gray
];

const ColorPicker = ({ onColorChange }: any) => {
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    onColorChange(color);
  };

  return (
    <div className="mt-2">
      <p className="text-xs font-bold text-black/75">Project color</p>
      <div className="flex flex-wrap">
        {colors.map((color) => (
          <div
            key={color}
            className={`w-8 h-8 shadow-sm cursor-pointer m-1 rounded-full ${
              color === selectedColor ? "ring ring-offset-2 ring-black/25" : ""
            }`}
            style={{ backgroundColor: color, opacity: 0.7 }}
            onClick={() => handleColorChange(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
