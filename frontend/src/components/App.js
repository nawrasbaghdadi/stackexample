import React, { Component } from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

import Todo from './Todo';
import { createTodo } from '../actions/ActionCreators';

let paperStyle = {
  width: '80%',
  maxWidth: 500,
  margin: '40px auto',
  padding: 20,
  paddingTop: 5,
};

class App extends Component {
  constructor( props ) {
    super( props );

    this.handleNewTodo = this.handleNewTodo.bind( this );
  }

  handleNewTodo(event) {
    event.preventDefault();
    this.props.createTodo( this.refs.textField.getValue() );
    this.refs.textField.clearValue();
  }

  render() {
    let todos = this.props.todos
      // display done todos at the end...
      .sort((a, b) => a.done === b.done ? 0 : ( a.done ? 1 : -1 ))
      .map((todo, index) =>
        <Todo key={ `todo${index}` } { ...todo } />
      );

    return (
      <Paper style={ paperStyle } >
        <form onSubmit={ this.handleNewTodo }>
          <TextField
            hintText="What to do?"
            floatingLabelText="New Todo"
            ref="textField"
            fullWidth
          />
        </form>
        { todos }
      </Paper>
    );
  }
}

export default connect(
  state => ({ todos: state.todos }),
  { createTodo }
)(App);
