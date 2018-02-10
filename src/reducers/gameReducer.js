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
      let setA = [""]
      let setB = [""]
        for (let i=1;i<11;i++)
        {setA[i]= Math.floor(Math.random() * 8)+5;
         setB[i]= Math.floor(Math.random() * 8)+5;}

      return Object.assign({}, state, { numberSetA: setA, numberSetB: setB})

    case 'START_GAME':

      return Object.assign({},state, {status: "started"})

    case 'END_GAME':
      return Object.assign({},state, {status: "finished"})

    case 'CHECK_ANSWER':
      let suppliedAnswer = action.answer;
      let problemNumber = action.index;
      let rightAnswer;
      let newNumberCorrect = state.numberCorrect;
      let newNumberIncorrect = state.numberIncorrect;

      switch(state.operation){
        case 'multiplication':
           rightAnswer = state.numberSetA[problemNumber]*state.numberSetB[problemNumber];
           break
        case 'addition':
          rightAnswer = state.numberSetA[problemNumber]+state.numberSetB[problemNumber]
          break
        default:
          break
        }


          if (parseInt(suppliedAnswer) === rightAnswer)
            { newNumberCorrect += 1}
          else
            { newNumberIncorrect += 1}

      return Object.assign({}, state, {numberCorrect: newNumberCorrect, numberIncorrect: newNumberIncorrect})


    case 'FINISH_GAME':
      return {}

    case 'FETCH_MOVIES':
      return {}

    default:
      return state;
  }
};
