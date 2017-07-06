import _ from 'lodash';
import React from 'react';
// import style from './style';
import TodoItem from './../todo-item';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.handle_toggleTodo = this.handle_toggleTodo.bind(this);
    this.handle_deleteTodo = this.handle_deleteTodo.bind(this);
  }

  handle_toggleTodo(todo, index) {
    this.props.toggleTodo(todo, index);
  }

  handle_deleteTodo(event, todo, index) {
    event.stopPropagation();
    this.props.deleteTodo(todo, index);
  }

  render() {
    return (
      <ul className="todolist">
      {
        this.props.todos.map(function(todo, index) {
          return (
            <li key={todo.id}>
              <TodoItem todo={todo} toggleTodo={() => this.handle_toggleTodo(todo, index)} deleteTodo={(event) => this.handle_deleteTodo(event, todo, index)} />
            </li>
          )
        }, this)
      }
      </ul>
    );
  }
};

export default ToDoList;
