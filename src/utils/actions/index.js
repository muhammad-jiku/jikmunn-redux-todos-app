import {
  GET_TODOS_FAILURE,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from '../constants';

//  get todos request
export const getTodosRequest = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};

//  get todos success
export const getTodosSuccess = (todos) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: todos,
  };
};

//  get todos failure
export const getTodosFailure = (error) => {
  return {
    type: GET_TODOS_FAILURE,
    payload: error,
  };
};
