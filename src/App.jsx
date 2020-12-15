import { useState } from 'react';
// import TodoMaker, { Todos } from './Components/TodoMaker';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  // creating todo
  const createTodo = e => {
    if (e.keyCode === 13) {
      const newTodo = {
        id: todos.length + 1,
        title: e.target.value.trim(),
        completed: false,
      }

      setTodos([...todos, newTodo])

      e.target.value = null
    }
  }

  // deleting todo
  const deleteTodo = (todo) => setTodos(todos.filter(t => t.id !== todo.id));

  // modifying todo, complete todo
  const completeTodo = ({ id }) => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed ? todo.completed = false : todo.completed = true;
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  // change class
  const changeClass = ({ completed }) => {
    return completed === true ? 'done-todo' : '';
  }

  return (
    <div className="container">
      <h1 className='h4 text-center'>Create your tasks</h1>
      <div className='form-group mt-2'>
        <input className='form-control' onKeyUp={createTodo} placeholder='What needs to be done?' />
      </div>
      <ul className='list list-group'>
        {todos.map(todo => {
          return (
            <li key={todo.id} className="d-flex justify-content-between align-items-center list-group-item list-group-item-action">
              <span className={changeClass(todo)}>{todo.title}</span>
              <div>
                <button className={todo.completed === true ? 'btn btn-sm mr-2 btn-warning text-white' : 'btn btn-success btn-sm mr-2'} onClick={completeTodo.bind(null, todo)}>{todo.completed === true ? 'Undone' : 'Done'}</button>
                <button className="btn btn-danger btn-sm" onClick={deleteTodo.bind(null, todo)}>X</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
