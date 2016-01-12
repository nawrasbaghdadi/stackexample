import React, { PropTypes } from 'react';
import Checkbox from 'material-ui/lib/checkbox';

const Todo = (props) => (
  <Checkbox
    label={ props.text }
    onChange={ props.done ? props.onUndone : props.onDone }
    defaultChecked={ props.done }
  />
);


Todo.propTypes = {
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onDone: PropTypes.func,
  onUndone: PropTypes.func,
};

export default Todo;
