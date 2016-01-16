import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Panel, Input } from 'react-bootstrap';

import Todo from './Todo';
import { createTodo, updateInput } from '../actions/ActionCreators';

let styles = {
  width: '80%',
  maxWidth: 500,
  margin: '10px auto',
};

class App extends Component {
  constructor( props ) {
    super( props );

    this.handleNewTodo = this.handleNewTodo.bind( this );
    this.handleInputChange = this.handleInputChange.bind( this );
  }

  handleNewTodo( event ) {
    event.preventDefault();
    this.props.createTodo( this.props.input );
    this.props.updateInput('');
  }

  handleInputChange() {
    this.props.updateInput( this.refs.textField.getValue() );
  }

  render() {
    let todos = this.props.todos
      // display done todos at the end...
      .sort((a, b) => a.done === b.done ? 0 : ( a.done ? 1 : -1 ))
      .map((todo, index) =>
        <Todo key={ `todo${index}` } { ...todo } />
      );

    return (
      <Panel header={ <h3>Kiron Todo App</h3> } style={ styles } >
        <form onSubmit={ this.handleNewTodo } >
          <Input
            ref="textField"
            type="text"
            placeholder="Enter new todo"
            value={ this.props.input }
            onChange={ this.handleInputChange }
          />
        </form>
        { todos }
      </Panel>
    );
  }
}

export default connect(
  state => state,
  { createTodo, updateInput }
)(App);
