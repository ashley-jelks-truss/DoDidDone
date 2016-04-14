import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../actions/todosAction';

const TodoItem = ({ todoItem, index, dispatch }) => (
  <li>
    { todoItem }
    <a onClick={ () => {
      dispatch(removeTodo(index));
    }}>
      <span> Delete</span>
    </a>
  </li>
);

TodoItem.propTypes = {
  todoItem: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect()(TodoItem);