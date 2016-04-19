import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../actions/todosAction';
import { toggleTodo } from '../actions/todosAction';
import Checkbox from 'material-ui/lib/checkbox';

const TodoItem = ({ todoItem, index, dispatch }) => {
  const style = {
    width: '40px',
    display: 'inline-block'
  };

  return (
    <li className="todo-list-item">
      <div style={ style } >
        <Checkbox checked={ todoItem.completed } onClick={ () => {
          dispatch(toggleTodo(index));
        }}/>
      </div>
      <span className="todo-item-text">{ todoItem.text }&nbsp;&nbsp;
      <a onClick={ () => {
        dispatch(removeTodo(index));
      }}>
        Delete
      </a>
      </span>
    </li>
  );
};

TodoItem.propTypes = {
  todoItem: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect()(TodoItem);
