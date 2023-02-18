import { useSelector } from 'react-redux';
import './App.css';
import Nav from './components/Nav';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

function App() {
  const todos = useSelector((state) => state.todo?.todos);  

  return (
    <div className="">
      <Nav />
      <TodoForm/>
      
      {todos.map((element, key) => <Todo todo={element} />)}

    </div>
  );
}

export default App;
