import { addTodo } from "@/redux/actions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Todo = ({ todoData }) => {
  console.log("todoData", todoData);
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      dispatch(addTodo(todo));
    }
  };

  function handleChange(e) {
    setTodo(e.target.value);
  }
  return (
    <div className="mx-auto h-100">
      <Input
        todo={todo}
        onChange={handleChange}
        style={{ backgroundColor: "red" }}
      />
      <form onSubmit={handleSubmit}>
        <button className=" bg-gray-500 p-2 ring-orange-50 rounded-lg">
          Add todo
        </button>
      </form>
      <TodoList />
    </div>
  );
};

export default Todo;

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Input = ({ todo, onChange, style }) => {
  return (
    <input
      className=" border-spacing-3 border-cyan-600 border rounded-lg px-2 h-12"
      type="text"
      name=""
      placeholder="add todo..."
      id=""
      value={todo}
      onChange={onChange}
      style={{ ...style }}
    />
  );
};

Todo.getInitialProps = async () => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const data = await res.json();

    return { todoData: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
