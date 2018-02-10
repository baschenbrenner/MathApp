# MathApp


user clicks on setup game
  - this sends a call to action/reducer which generates a list of random numbers in two arrays (*eventually, *I will be able to have the number and types of numbers be dependent on sliders which are components that are in the game page, for now they are hard coded at 10 numbers between 8 and 12*)
 - this call changes the state of the provider, causing the page to re-render which means we had to pass through componentDidUpdate
 - then the user presses start game - this action does three things:
        1 - changes the state.status to started
        2 - starts the timer
        3 - and should change the index to 1 which means the user can see the first question
  - this call also changes the state which should cause the page to re-render and trigger componentDidUpdate
