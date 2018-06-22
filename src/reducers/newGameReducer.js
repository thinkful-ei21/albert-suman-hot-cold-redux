'use strict';

import { NEW_GAME } from '../actions/index.js';

const initialState = {
  guesses: [],
  feedback: 'NEW GAME INITIALIZED',
  auralStatus: '',
  correctAnswer: Math.round(Math.random() * 100) + 1
};

export const newGameReducer = (state=initialState, action) => {
  if (action.type === NEW_GAME) {
    return {
      ...state,
      correctAnswer: Math.round(Math.random() * 100) + 1
    }
  }
  return state;
};
