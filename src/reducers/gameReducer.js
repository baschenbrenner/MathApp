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
      return {}

    case 'CHECK_ANSWER':
      let suppliedAnswer = action.answer;
      let index = action.index;
      let rightAnswer

      switch(state.operation){
        case 'multiplication':
          return rightAnswer = state.numberSetA[index]*state.numberSetB[index]
        case 'addition':
          return rightAnswer = state.numberSetA[index]+state.numberSetB[index]
        default:
          return rightAnswer = 2
        }

          if (suppliedAnswer === rightAnswer)
            {return Object.assign({}, state, {numberCorrect: 1})}
          else {
            return state
          }



    case 'FINISH_GAME':
      return {}

    case 'FETCH_MOVIES':
      return {}

    default:
      return state;
  }
};
