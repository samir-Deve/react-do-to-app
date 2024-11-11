import React from "react";
import "../styles/task.css";

function Task(props) {
  const {
    bgColor,
    toDo,
    id,
    comp,
    handleCheck,
    Delete,
    onDragOverItem,
    onDragItem,
    dragNdrop
  } = props;
  const completed = comp ? "completed" : "";
  const checked = comp ? "checked" : "";
  return (
    <li 
    id={id}
    className={`task ${completed}`} 
    draggable
    onDragStart={(e) => onDragItem.current = id}
    onDragEnter={(e) => onDragOverItem.current = id}
    onDragEnd={() => dragNdrop(onDragItem, onDragOverItem)}
    onDragOver={(e) => e.preventDefault()}
    >
      <div className="check-task-text">
        <button
          className={`check ${bgColor} ${checked}`}
          onClick={() => handleCheck(id)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
            <path
              fill="none"
              stroke="#FFF"
              strokeWidth="2"
              d="M1 4.304L3.696 7l6-6"
            />
          </svg>
        </button>
        <p className={`task-text ${bgColor}`}>{toDo}</p>
      </div>
      <button className="delete" onClick={() => Delete(id)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fill="#494C6B"
            fillRule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </button>
    </li>
  );
}

export default Task;
