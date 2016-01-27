import React, { PropTypes } from 'react';
import { Input } from 'react-bootstrap';

const Todo = props => (
  <Input
    type="checkbox"
    label={ props.text }
    onChange={ props.done ? props.onUndone : props.onDone }
    checked={ props.done }
  />
);

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onDone: PropTypes.func,
  onUndone: PropTypes.func,
};

export default Todo;
