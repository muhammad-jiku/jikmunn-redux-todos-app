//  external imports
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

//  internal import
import { todosReducer } from '../reducers';

//  create store
export const todosStore = createStore(todosReducer, applyMiddleware(thunk));
