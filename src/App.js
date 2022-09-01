import React,{useState}from 'react';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

function App() {

  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "Изучение HTML-CSS",
      status: true,
    },
    {
      id: 2,
      title: "Изучение JavaScript",
      status: false,
    },
    {
      id: 3,
      title: "Закончить курс",
      status: false,
    },
  ]);

  return  <div className="App">
    <Header />
    <AddTodo todo={todo} setTodo={setTodo} />
    <TodoList todo={todo} setTodo={setTodo} />
    </div>
  
}

export default App;
