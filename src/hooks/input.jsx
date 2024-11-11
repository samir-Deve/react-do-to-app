import React from "react";
import "../styles/input.css";

function Input(props) {
  const { bgColor, value, handleInput, addToList } = props;
	function onEnter(e) {
		if(e.key === "Enter") {
			addToList()
		}
		return
	}
  return (
    <div className={`input-cont ${bgColor}`}>
      <span className="circle" aria-describedby="nothing important"></span>
      <input
        type="text"
        placeholder="Create a new todo..."
        value={value}
        onChange={(e) => handleInput(e)}
        id="input"
				onKeyDown={(e) => onEnter(e)}
      />
    </div>
  );
}

export default Input;
