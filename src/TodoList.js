import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const values = this.props.todoList;
                  const listValues = values.map((info, value) =>
                    <li key={value}>
                      <Todo text = {info.text} priority = {info.priority.toString()} dueDate = {info.dueDate.toString()}></Todo>
                    </li>
                  );
                  return (
                    <ul>{listValues}</ul>
        );
    }

}
export default  TodoList;