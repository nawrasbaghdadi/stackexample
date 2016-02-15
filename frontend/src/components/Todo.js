import React, { PropTypes } from 'react';
import { Input } from 'react-bootstrap';

const Todo = props => (
  <Input
    id = {props.id}
    type="checkbox"
    label={ props.text }
    onClick={ onTodoClick}
    checked={ props.done ? props.onUndone : props.onDone  } />);

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onDone: PropTypes.func,
  onUndone: PropTypes.func,
};
function onTodoClick() {
  $r.store.dispatch({type:'TOGGLE_TODO'});
}
export default Todo;
