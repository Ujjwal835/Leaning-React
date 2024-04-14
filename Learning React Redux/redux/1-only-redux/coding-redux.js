//import format in node
const redux = require("redux");

const INITIAL_VALUE = {
  counter: 0,
};

// creating reducer
const reducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore = { counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    newStore = { counter: store.counter - 1 };
  } else if (action.type === "ADDITION") {
    newStore = { counter: store.counter + action.payload.number };
  }
  return newStore;
};

//creating store
const store = redux.createStore(reducer);

//creating a subscriber
const subscriber = () => {
  const state = store.getState();
  console.log(state);
};

// establishing connection between subscribr and store
store.subscribe(subscriber);

//creating actions
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "ADDITION",payload:{number:7} });
