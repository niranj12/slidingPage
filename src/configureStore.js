import { createStore } from "redux";

const initialState = {
  keyboardScrollEnabled: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_KEYBOARD_SCROLL":
      return {
        ...state,
        keyboardScrollEnabled: !state.keyboardScrollEnabled
      };
    default:
      return state;
  }
};

const createInitialStore = (initialState = {}) => {
  const store = createStore(reducer, initialState);

  return store;
};

export default createInitialStore;
