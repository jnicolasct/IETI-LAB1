import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="Todo">
                    <h2>Text: {this.props.text} </h2>
                    <h2>Priority: {this.props.priority} </h2>
                    <h2>DueDate: {this.props.dueDate} </h2>
          </div>
        );
    }

}
export default  Todo;