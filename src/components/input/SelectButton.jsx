import React from "react";

const SelectButton = () => {
  return (
    <form className="w-fit">
      <label
        htmlFor="countries"
        className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-whit "
      >
        Select an option
      </label>
      <select
        id="countries"
        defaultValue="default"
        className="border-b-2 border-t-0 border-l-0 border-r-0 border-b-gray-500 text-gray-900 text-sm block w-full p-2.5 pr-10"
      >
        <option value="default">Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </form>
  );
};
export default SelectButton;
