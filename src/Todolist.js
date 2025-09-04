import React, { useState } from "react";

function Todolist() {
  const [task, setTask] = useState("");
  const [todolist, setTodolist] = useState([]);
  const [input, setInput] = useState("");
  const addtodo = () => {
    if (task) {
      setTodolist([...todolist, task]);
      setTask("");
    }
  };
  const Deletetodo = (index) => {
    const newlist = todolist.filter((value, item) => item !== index);
    setTodolist(newlist);
  };

  const filteredList = todolist.filter((item) =>
    item.toLowerCase().includes(input.toLowerCase())
  );
  return (
    <div>
      <h2>Simple Todo</h2>
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addtodo}>Add</button>
      <input
        type="search"
        placeholder="type to search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <ul>
        {filteredList.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => Deletetodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
