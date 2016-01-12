import { NEW_TODO } from '../constants/ActionTypes';

const initialState = {
  todos: [
    {
      text: 'My first todo',
      done: true,
    }
  ]
};

export default function( state = initialState, action ) {
  switch( action.type ) {
  case NEW_TODO:
    const newTodo = {
      text: action.text,
      done: false,
    };

    return {
      ...state,
      todos: [
        newTodo,
        ...state.todos,
      ]
    }
  default:
    return state;
  }
}
