import {createStore, applyMiddleware} from 'redux';
import weatherData from '../reducers/weatherReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState){
  return createStore(
    weatherData,
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}
