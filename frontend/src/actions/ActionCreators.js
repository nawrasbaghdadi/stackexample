import { NEW_TODO, UPDATE_INPUT } from '../constants/ActionTypes';

export const createTodo = text => ({
  type: NEW_TODO,
  text,
});

export const updateInput = text => ({
  type: UPDATE_INPUT,
  text,
});
