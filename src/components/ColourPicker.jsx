import { useState } from "react";

function ColourPicker() {
  const [colour, setColour] = useState("Red");

  return (
    <>
      <select value={colour} onChange={(e) => setColour(e.target.value)}>
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
        <option value="Yellow">Yellow</option>
      </select>
      <h2>Your Favourite Colour is:{colour}</h2>
    </>
  );
}

export default ColourPicker;
