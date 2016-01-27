import { NEW_TODO, UPDATE_INPUT } from '../constants/ActionTypes';

const initialState = {
  input: '',
  todos: [
    {
      text: 'My first todo',
      done: true,
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_INPUT:
      return {
        ...state,
        input: action.text,
      };
    case NEW_TODO:
      return {
        ...state,
        todos: [
          {
            text: action.text,
            done: false,
          },
          ...state.todos,
        ],
      };
    default:
      return state;
  }
}
