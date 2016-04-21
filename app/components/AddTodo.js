import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todosAction';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/RaisedButton';

const AddTodo = ({ dispatch }) => {
  const style = {
    margin: 12
  };

  return (
    <div>
      <TextField
        hintText="Enter todo item"
        id="addTodoText"
      />
      <RaisedButton label="Add" style={style} primary={true} onClick={() => {
        let inputField = document.getElementById('addTodoText');
        dispatch(addTodo(inputField.value));
        inputField.value = '';
      }} />
    </div>
  );
};

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(AddTodo);
