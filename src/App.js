import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { useState, useEffect } from "react";


function App() {
 
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtredTodos, setfiltredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []) 
  
  useEffect(() => {
    filterHandler();
    saveLocaLStorage();
  }, [todos, status]);

 

  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setfiltredTodos(todos.filter(todo => todo.completed === true));
        break;
      
      case 'uncompleted':
        setfiltredTodos(todos.filter(todo => todo.completed === false));
        break;
      
      default:
        setfiltredTodos(todos);
        break;
    }
  };

  const saveLocaLStorage = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Program of the day :</h1>
      </header>
      <Form 
        todos={todos} 
        setTodos={setTodos} 
        input={input} 
        setInput={setInput} 
        setStatus={setStatus}
        />
        
      <TodoList 
        todos={todos} 
        setTodos={setTodos}
        filtredTodos={filtredTodos}
      />
    </div>
  );
}

export default App;
