import React, { useState } from "react";

function RadioButton() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="p-4 border-b-2 border-gray-500">
      <label className="flex items-center">
        <input
          type="checkbox"
          className="w-6 h-6 rounded-full"
          checked={isChecked}
          onChange={handleToggle}
        />
        <span className="ml-2">Open Now</span>
      </label>
    </div>
  );
}

export default RadioButton;
