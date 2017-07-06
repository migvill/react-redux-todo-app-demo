import _ from 'lodash';
import React from 'react';
// import style from './style';

class AddToDo extends React.Component {
  constructor(props) {
    super(props);
    console.log('AddToDo props', props);
    this.handle_addTodo = this.handle_addTodo.bind(this);
    this.handle_textChange = this.handle_textChange.bind(this);
    this.handle_keyPress = this.handle_keyPress.bind(this);
    this.state = {
      todoName: ''
    };
  }

  handle_addTodo() {
    const todoName = this.state.todoName;

    if (todoName) {
      this.props.addTodo(todoName);

      /* clear new todo */
      this.setState({
        todoName: ''
      });
    }

  }

  handle_textChange(e) {
    this.setState({todoName: e.target.value});
  }

  handle_keyPress(e) {
    if (e.key === 'Enter') {
      this.handle_addTodo();
    }
  }

  render() {
    return (
      <div>
        <input type="text" name="todo_name"
          placeholder="Add a new to do" value={ this.state.todoName }
          onChange={this.handle_textChange}
          onKeyPress={this.handle_keyPress} />
        <button type="button" onClick={this.handle_addTodo}>Add</button>
      </div>
    );
  }
};

export default AddToDo;
