import {MAKE_GUESS, NEW_GAME} from '../actions/index.js';

const initialState = {
  guesses: [3,4,5,6,7],
  feedback: 'Suman Bandita Samantaray!',
  auralStatus: '',
  correctAnswer: 40//Math.floor(Math.random() * 100) + 1
};


const guessReducer = (state= initialState, action) => {
  switch(action.type){
    case MAKE_GUESS:
      if (isNaN(action.guess)){
        return {
          ...state,
          feedback:'Please enter a valid number'
        };
      }
      let guess = parseInt(action.guess, 10);
      if(!guess){
        return state;
      }else{
        const difference = Math.abs(guess - state.correctAnswer);
        let feedback;
        if (difference >= 50) {
          feedback = 'You\'re Ice Cold...';
        } else if (difference >= 30) {
          feedback = 'You\'re Cold...';
        } else if (difference >= 10) {
          feedback = 'You\'re Warm.';
        } else if (difference >= 1) {
          feedback = 'You\'re Hot!';
        } else {
          feedback = 'You got it!';
        }
        const val = {
          ...state,
          guesses: [...state.guesses,guess],
          feedback
        };        
        return val;
      }

    case NEW_GAME:
      if(action.type !== 'NEW_GAME'){
        return state;
      }else{
        return {
          ...state,        
          guesses: [],
          feedback: 'Make your guess!',
          auralStatus: '',
          correctAnswer: Math.floor(Math.random() * 100) + 1
        }
      }     

    default:
  }
  return state;
};

export default  guessReducer;