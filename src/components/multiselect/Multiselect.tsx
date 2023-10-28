import React from "react";

const Multiselect = () => {
  return (
    <>
      <h1>Multi Select</h1>
      <div>
        <select multiple name="newselect" id="newselect">
          <option value="1">A</option>
          <option value="2">B</option>
          <option value="3">C</option>
        </select>
      </div>
    </>
  );
};

export default Multiselect;
