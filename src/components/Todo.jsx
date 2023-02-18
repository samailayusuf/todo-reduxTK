import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../data/todoSlice";
import "./Todo.css";

export default function Todo({ todo }) {
  const dispatch = useDispatch();
  return (
    <div className="flex">
      <h3>{todo.id + " : " + todo.text}</h3>
      <div> </div>
      <h3 className="hover" onClick={() => dispatch(removeTodo(todo.id))}>
        &times;
      </h3>
    </div>
  );
}
