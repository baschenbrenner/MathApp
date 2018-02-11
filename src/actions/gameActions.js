export const setNumbersForGame = () => {
  return {
    type: 'SET_NUMBERS_FOR_GAME'
  };
};

export const checkAnswer = (answer, index) => {
  return {
    type: 'CHECK_ANSWER',
    answer: answer,
    index: index
  };
};

export const startGame = () => {
  return {
    type: 'START_GAME'
  };
};

export const endGame = () => {
  return {
    type: 'END_GAME'
  };
};

export const resetGame = () => {
  return {
    type: 'RESET_GAME'
  };
};

export const addUnanswered = () => {
  return {
    type: 'ADD_UNANSWERED'
  };
};
