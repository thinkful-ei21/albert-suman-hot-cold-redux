'use strict';

import { MAKE_GUESS } from '../actions/index.js';

const initialState = {
  guesses: [],
  feedback: 'Make a guess!',
  auralStatus: '',
  correctAnswer: Math.round(Math.random() * 100) + 1
};

export const guessReducer = (state=initialState, action) => {
  if (action.type === MAKE_GUESS) {
    if (!action.guess) {
      return state;
    } else if (isNaN(action.guess)) {
      return {
        ...state,
        feedback: 'Please enter a valid number'
      };
    } else {

      const guess = parseInt(action.guess, 10);
      const newGuesses = [...state.guesses, guess]
      const difference = Math.abs(guess - state.correctAnswer);
      let newFeedback;

      if (difference >= 50) {
        newFeedback = 'You\'re Ice Cold...';
      } else if (difference >= 30) {
        newFeedback = 'You\'re Cold...';
      } else if (difference >= 10) {
        newFeedback = 'You\'re Warm.';
      } else if (difference >= 1) {
        newFeedback = 'You\'re Hot!';
      } else {
        newFeedback = 'You got it!';
      }

      return {
        ...state,
        feedback: newFeedback,
        guesses: newGuesses
      };
    }
  }
  return state;
};
