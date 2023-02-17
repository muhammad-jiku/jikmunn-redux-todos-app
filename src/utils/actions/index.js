import axios from 'axios';
import {
  GET_TODOS_FAILURE,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from '../constants';

const API_URI = 'https://jsonplaceholder.typicode.com/todos';

//  get todos request
export const getTodosRequest = () => async (dispatch) => {
  dispatch({
    type: GET_TODOS_REQUEST,
  });

  try {
    const res = await axios.get(API_URI);
    const todos = await res.data;
    dispatch({
      type: GET_TODOS_SUCCESS,
      payload: todos,
    });
  } catch (error) {
    dispatch({
      type: GET_TODOS_FAILURE,
      payload: error.message,
    });
  }
};

// //  get todos success
// export const getTodosSuccess = (todos) => async (dispatch) => {
//   dispatch ({
//     type: GET_TODOS_SUCCESS,
//     payload: todos,
//   });
// };

// //  get todos failure
// export const getTodosFailure = (error) => async (dispatch) => {
//   dispatch ({
//     type: GET_TODOS_FAILURE,
//     payload: error,
//   });
// };
