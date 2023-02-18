import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../data/todoSlice";
import { useState } from "react";

function TodoForm() {
  const todosFromStore = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({});
  const [text, setText] = useState("");
  console.log("TodosFromStore: " + todosFromStore.length);

  const onChangeText = (e) => setText(e.target.value);

  const addNewTodo = () => {
    setTodo({
      id: todosFromStore.length + 1,
      text: text,
      completed: false,
    });
    dispatch(addTodo(todo));
    setText("");
  };

  return (
    <div>
      <input type="text" onChange={onChangeText} value={text} />
      <button onClick={addNewTodo}>Add Todo</button>
    </div>
  );
}

export default TodoForm;
