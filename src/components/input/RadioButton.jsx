import React, { useState } from "react";

function RadioButton({ setStatus, status }) {
  const handleToggle = () => {
    setStatus(!status);
  };

  return (
    <div className="p-2 border-b-2 border-gray-500">
      <label className="flex items-center">
        <input
          type="checkbox"
          className="w-4 h-4 rounded-full"
          checked={status}
          onChange={handleToggle}
        />
        <span className="ml-2">Open Now</span>
      </label>
    </div>
  );
}

export default RadioButton;
