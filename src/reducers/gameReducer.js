export default (state = {
  numberSetA: [],
  numberSetB: [],
  operation: "multiplication",
  timePerQuestion: 5,
  numberOfQuestions: 10,
  numberCorrect: 0,
  numberIncorrect: 0,
  numberUnanswered: 0,
  status: "unstarted"

}, action) => {
  switch (action.type) {

    case 'SET_NUMBERS_FOR_GAME':
      return Object.assign({}, state, { numberSetA: [5,6,7,8,9,5,6,7,8,9], numberSetB: [7,8,6,6,7,8,9,8,7,9]})

    case 'GET_NEXT_QUESTION':
      return

    case 'CHECK_ANSWER':
      return

    case 'FINISH_GAME':
      return

    case 'FETCH_MOVIES':
      return 

    default:
      return state;
  }
};
