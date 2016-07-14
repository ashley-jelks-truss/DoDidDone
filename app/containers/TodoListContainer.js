import React, { PropTypes } from 'react';
import { List } from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'isomorphic-fetch';
import * as TodoActions from '../actions/todosAction';
import TodoList from '../components/TodoList/TodoList';
import AddTodo from '../components/TodoList/AddTodo';

class TodoListContainer extends React.Component {
  constructor(props) {
    console.log(props, 'props in TodoListContainer');
    super(props);
    this.props.actions.fetchTodoItems();
  }
  render() {
    const { todoItems, actions } = this.props;

    return (
      <div>
        <TodoList todoItems={todoItems} actions={actions}/>
        <AddTodo addTodoItem={actions.addTodoItem} saveTodoToUser={actions.addTodoAndUserToState} />
      </div>
    );
  }
}

TodoListContainer.propTypes = {
  todoItems: PropTypes.instanceOf(List),
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    todoItems: state.todos.get('todoItems'),
    user: state.auth.get('user'),
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer);
