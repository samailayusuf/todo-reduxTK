import { useSelector, useDispatch } from 'react-redux';
import {removeTodo, addTodo} from '../src/data/todoSlice'
import './App.css';

function App() {
  const todos = useSelector((state) => state.todo?.todos);
  const dispatch = useDispatch();
  const data = {
    id: Math.random() * 100,
    text: "Another text",
    completed: false
  }

  return (
    <div className="App">
      <h1>{todos[0]?.text ? todos[0]?.text : ('Empty')}</h1>
      <button onClick={() => dispatch(removeTodo(1))}>
        Remove Todo
      </button>
      <button onClick={() => dispatch(addTodo(data))}>
        Add Todo
      </button>
    </div>
  );
}

export default App;
