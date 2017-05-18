import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import Thunk from 'redux-thunk';

export default function configureStore(initialState){
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(Thunk, reduxImmutableStateInvariant())
  );
}
