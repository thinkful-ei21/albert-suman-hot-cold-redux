import { combineReducers } from 'redux';

import { guessReducer } from './guessReducer.js';
import { newGameReducer } from './newGameReducer.js';

const rootReducer = combineReducers({
  guessReducer,
  newGameReducer
});

export default rootReducer;
