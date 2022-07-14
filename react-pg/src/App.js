import React from "react";

const name = "Kittipong"

function App() {
  return (
    <div>
      <label for="" style={{color:'red'}}>{name}</label>
      <select className="form-select">
        <option value="">ตัวเลือก</option>
        <option value="">ตัวเลือก 1</option>
        <option value="">ตัวเลือก 2</option>
        <option value="">ตัวเลือก 3</option>
        <option value="">ตัวเลือก 4</option>
      </select>
    </div>
  );
}

export default App;
