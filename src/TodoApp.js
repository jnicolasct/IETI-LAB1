import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from './TodoList';
import {Todo} from './Todo';

export class TodoApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = { items: [{text:"Learn React", priority:5, dueDate: new Date(2020,1,28) },
                                         {text:"Learn about APIs", priority:4, dueDate: new Date(2020,1,23) },
                                         {text:"write TODO App", priority:3, dueDate: new Date(2020,1,30) }], text: '', priority: '', dueDate: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList todoList={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            name= "text"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <input
             id="new-priority"
             name= "priority"
             onChange={this.handleChange}
             value={this.state.priority}
          />
          <input
             id="new-date"
             name= "dueDate"
             type = "Date"
             onChange={this.handleChange}
             value={this.state.dueDate}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    const actual = e.target.name;
    this.setState({ [actual]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length && !this.state.priority.length && !this.state.dueDate.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      priority: this.state.priority,
      dueDate: new Date (this.state.dueDate)
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: '',
      priority: '',
      dueDate: ''
    }));
  }
}