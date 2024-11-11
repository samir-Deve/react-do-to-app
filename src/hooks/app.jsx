import React, { useState, useRef } from "react";
import "../styles/app.css";

import Header from "./header";
import Input from "./input";
import Task from "./task";
import ClearCompleted from "./clearCompleted";
import ItemsLeft from "./itemsLeft";
import Active from "./filterActive";
import Completed from "./filterCompleted";
import All from "./filterAll";

function App() {
  const [bgColor, setBgColor] = useState("night");
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState("all");
  const [input, setInput] = useState("");

  const onDragItem = useRef(null);
  const onDragOverItem = useRef(null);

  function FiltAll(e) {
    setFilter("all");
    handleOff();
    e.target.classList.add("is-on");
  }

  function FiltActive(e) {
    setFilter("active");
    handleOff();
    e.target.classList.add("is-on");
  }

  function FiltComple(e) {
    setFilter("completed");
    handleOff();
    e.target.classList.add("is-on");
  }

  function handleOff() {
    let filtAll = document.querySelector(".list-cont-footer .all");
    let filtActive = document.querySelector(".list-cont-footer .filt-active");
    let filtCompleted = document.querySelector(
      ".list-cont-footer .filt-completed"
    );

    filtCompleted.classList.remove("is-on");
    filtActive.classList.remove("is-on");
    filtAll.classList.remove("is-on");
  }

  function handelBgSwith() {
    if (bgColor === "day") {
      setBgColor("night");
    } else {
      setBgColor("day");
    }
  }

  function handleInput(e) {
    setInput(e.target.value);
  }

  function addToList() {
    if (!list || list.length === 0) {
      let newTodo = { id: 0, toDo: input, completed: false };
      0;
      setList([newTodo]);
    } else {
      const newTodo = { id: list.length, toDo: input, completed: false };
      setList((pre) => [...pre, newTodo]);
    }
    setInput("");
  }

  function handleCheck(id) {
    console.log(id);
    setList((pre) =>
      pre.map((each) =>
        each.id === id ? { ...each, completed: !each.completed } : each
      )
    );
  }

  function Delete(id) {
    setList((pre) => pre.filter((each) => each.id !== id));
  }

  function dragNdrop(draged, onDrag) {
    let _updated = [...list];

    const draggedFound = _updated.findIndex(
      (each) => each.id === draged.current
    );
    const onDragFound = _updated.findIndex(
      (each) => each.id === onDrag.current
    );


    [_updated[draggedFound], _updated[onDragFound]] = [
      _updated[onDragFound],
      _updated[draggedFound],
    ]; 

    onDragItem.current = null;
    onDragOverItem.current = null;

    setList(_updated);
  }

  function ClearCompl() {
    setList((pre) => pre.filter((each) => each.completed !== true));
  }

  function showTotal() {
    let total = 0;
    if (list.length > 0) {
      list.map((each) => (total += 1));
    }
    return total;
  }

  return (
    <>
      <div className="wrapper">
        <header className={bgColor}></header>
        <div className="components">
          <main className="tasks-cont">
            <div className="upper">
              <Header bgColor={bgColor} handelBgSwith={handelBgSwith} />
              <Input
                bgColor={bgColor}
                value={input}
                handleInput={handleInput}
                addToList={addToList}
              />
            </div>
            <ul className={`tasks ${bgColor}`}>
              {filter === "active" &&
                list
                  .filter((each) => !each.completed)
                  .map((eachFil) => (
                    <Task
                      key={eachFil.id}
                      bgColor={bgColor}
                      toDo={eachFil.toDo}
                      comp={eachFil.completed}
                      id={eachFil.id}
                      handleCheck={handleCheck}
                      Delete={Delete}
                      onDragItem={onDragItem}
                      onDragOverItem={onDragOverItem}
                      dragNdrop={dragNdrop}
                    />
                  ))}
              {filter === "all" &&
                list.map((eachFil) => (
                  <Task
                    key={eachFil.id}
                    bgColor={bgColor}
                    toDo={eachFil.toDo}
                    comp={eachFil.completed}
                    id={eachFil.id}
                    handleCheck={handleCheck}
                    Delete={Delete}
                    onDragItem={onDragItem}
                    onDragOverItem={onDragOverItem}
                    dragNdrop={dragNdrop}
                  />
                ))}
              {filter === "completed" &&
                list
                  .filter((each) => each.completed)
                  .map((eachFil) => (
                    <Task
                      key={eachFil.id}
                      bgColor={bgColor}
                      toDo={eachFil.toDo}
                      comp={eachFil.completed}
                      id={eachFil.id}
                      handleCheck={handleCheck}
                      Delete={Delete}
                      onDragItem={onDragItem}
                      onDragOverItem={onDragOverItem}
                      dragNdrop={dragNdrop}
                    />
                  ))}
            </ul>
            {list.length !== 0 ? (
              <div className="list-cont-footer">
                <ItemsLeft showTotal={showTotal} />
                <div className="fitlers">
                  <All FiltAll={FiltAll} />
                  <Active FiltActive={FiltActive} />
                  <Completed FiltComple={FiltComple} />
                </div>
                <ClearCompleted ClearCompl={ClearCompl} />
                <span className={`bottom-text ${bgColor}`}>Drag and drop to reorder the list</span>
              </div>
            ) : (
              ""
            )};
          </main>
        </div>
        <footer className={bgColor}></footer>
      </div>
    </>
  );
}

export default App;
