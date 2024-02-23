import React from "react";

const SelectButton = ({ list, filter, setFilter, title = "select" }) => {
  const selection = list;

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setFilter(selectedValue);
  };

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
        value={filter} // Bind value to the filter state
        onChange={handleSelectChange} // Handle select change event
        className="border-b-2 border-t-0 border-l-0 border-r-0 border-b-gray-500 text-gray-900 text-sm block w-full p-2.5 pr-10"
      >
        <option value=" ">{title}</option>
        {selection.map((item, key) => (
          <option key={key} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </form>
  );
};
export default SelectButton;
