import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from './TodoList';
import {TodoApp} from './TodoApp';

function App() {
    const todos = [{text:"Learn React", priority:5, dueDate: new Date(2020,1,28) },
              {text:"Learn about APIs", priority:4, dueDate: new Date(2020,1,23) },
              {text:"write TODO App", priority:3, dueDate: new Date(2020,1,30) }];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          &lt;h1&gt;TODO React App&lt;/h1&gt;
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <TodoApp />
    </div>
  );
}

export default App;
