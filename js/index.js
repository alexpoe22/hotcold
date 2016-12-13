require('babel-polyfill');

import * as actions from './actions/index'

import store from './store'

console.log(store);

//learn about this
// subscribe is a method that listens for changes on the store
let unsubscribe = store.subscribe(() => {
    console.log(store.getState());
}) 


	store.dispatch(actions.newGame())
	store.dispatch(actions.addGuess(95))
	store.dispatch(actions.addGuess(85))
	store.dispatch(actions.addGuess(75))
	store.dispatch(actions.addGuess(65))
	store.dispatch(actions.addGuess(55))
	store.dispatch(actions.addGuess(45))
	store.dispatch(actions.addGuess(35))
	store.dispatch(actions.addGuess(25))
	store.dispatch(actions.addGuess(15))
	store.dispatch(actions.addGuess(5))
	store.dispatch(actions.newGame())


unsubscribe();