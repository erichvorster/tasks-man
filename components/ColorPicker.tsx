import React, { useState } from 'react';

const colors = [
  '#FF0000', // Red
  '#FFA500', // Orange
  '#FFFF00', // Yellow
  '#008000', // Green
  '#0000FF', // Blue
  '#4B0082', // Indigo
  '#EE82EE', // Violet
  '#FFFFFF', // White
  '#000000', // Black
  '#808080', // Gray
];

const ColorPicker = ({ onColorChange }) => {
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorChange = (color) => {
    setSelectedColor(color);
    onColorChange(color); // Pass the selected color back to the parent component
  };

  return (
    <div className="flex flex-wrap">
      {colors.map((color) => (
        <div
          key={color}
          className={`w-10 h-10 cursor-pointer m-1 rounded-full ${
            color === selectedColor ? 'ring ring-offset-2 ring-blue-500' : ''
          }`}
          style={{ backgroundColor: color }}
          onClick={() => handleColorChange(color)}
        />
      ))}
    </div>
  );
};

export default ColorPicker;
