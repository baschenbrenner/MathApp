export const setNumbersForGame = () => {
  return {
    type: 'SET_NUMBERS_FOR_GAME'
  };
};

export const checkAnswer = (answer) => {
  return {
    type: 'CHECK_ANSWER',
    answer: answer
  };
};
