import _ from 'lodash';
import React from 'react';
import style from './style';
import AddToDo from './add-todo';
import ToDoList from './todo-list';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.handle_addTodo = this.handle_addTodo.bind(this);
    this.handle_toggleTodo = this.handle_toggleTodo.bind(this);
    this.handle_deleteTodo = this.handle_deleteTodo.bind(this);

    /* initial to do list */
    this.state = {
        todos: []
    };
  }

  handle_addTodo(todoName) {
    let newTodo = {
      id: _.uniqueId(),
      name: todoName,
      completed: false
    };
    let oldTodos = this.state.todos;
    let newTodos = [
      ...oldTodos,
      newTodo
    ];
    this.setState({
      todos: newTodos
    });
  };

  handle_toggleTodo(todo, index) {
      let updatedTodo = {
        ...todo,
        completed: !todo.completed
      };
      let oldTodos = this.state.todos;
      let newTodos = [
        ...oldTodos.slice(0, index),
        updatedTodo,
        ...oldTodos.slice(index + 1)
      ];
      this.setState({
        todos: newTodos
      });
  };

  handle_deleteTodo(todo, index) {
    let oldTodos = this.state.todos;
    let newTodos = [
      ...oldTodos.slice(0, index),
      ...oldTodos.slice(index + 1)
    ];
    this.setState({
      todos: newTodos
    });
  };

  render() {
    return (
      <div>
        <AddToDo addTodo={this.handle_addTodo} />
        <ToDoList todos={this.state.todos} toggleTodo={this.handle_toggleTodo} deleteTodo={this.handle_deleteTodo}/>
      </div>
    );
  }
};

export default TodoApp;
