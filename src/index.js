import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

import Game from './components/game';

import store from './store.js';
import { makeGuess } from './actions/index.js';
import { newGame } from './actions/index.js';

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

// logs initialState
console.log('initial state in both reducers', store.getState());

// test guessReducer
store.dispatch(makeGuess(50));
console.log('after makeGuess(50)', store.getState());

// test newGameReducer
store.dispatch(newGame());
console.log('after newGame()', store.getState());
