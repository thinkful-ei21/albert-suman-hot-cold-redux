import {createStore} from 'redux';
import guessReducer from './reducer';

const store = createStore(guessReducer);
export default store;
