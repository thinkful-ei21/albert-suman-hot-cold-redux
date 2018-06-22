import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

import Game from './components/game';
import Store from './store';
import { makeGuess,newGame } from './actions';

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

console.log(Store.getState());
Store.dispatch(newGame());
console.log(Store.getState());