import { NEW_TODO } from '../constants/ActionTypes';

export const createTodo = text => ({
  type: NEW_TODO,
  text,
});
