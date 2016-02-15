import { NEW_TODO, UPDATE_INPUT , TOGGLE_TODO } from '../constants/ActionTypes';

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
      case 'TOGGLE_TODO':
    console.log('toggle-todo');
    default:
      return state;
  }
}
