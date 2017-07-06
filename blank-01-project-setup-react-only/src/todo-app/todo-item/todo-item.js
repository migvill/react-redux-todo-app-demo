import _ from 'lodash';
import React from 'react';
// import style from './style';

const TodoItem = (props) => {
  return (
    <div>
      <label>
        <input type="checkbox" checked={props.todo.completed} onChange={props.toggleTodo} />{props.todo.name}
      </label>
      <button type="button" onClick={props.deleteTodo}>Delete</button>
    </div>
  );
}

//
// class TodoItem extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log(props);
//     this.handle_deleteTodo = this.handle_deleteTodo.bind(this);
//   }
//
//   handle_deleteTodo(todo) {
//     console.log('ToDoList delete', todo);
//     this.props.deleteTodo(todo);
//   }
//
//   render() {
//     return (
//       <ul className="todolist">
//       {
//         this.props.todos.map((todo) => {
//           return (
//             <li key={todo.id}>
//               {todo.name}
//               <button type="button" onClick={() => this.handle_deleteTodo(todo)}>Delete</button>
//             </li>
//           )
//         })
//       }
//       </ul>
//     );
//   }
// };

export default TodoItem;
