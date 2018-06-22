'use strict';

export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (guess) => {
  return {
    type: MAKE_GUESS,
    guess
  };
};

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => {
  return {
    type: NEW_GAME
  };
};
