export default function(state = null, action) {
  // State is not application state - but only the state the reducer is responsible for. Initial state of BOOK_SELECTED is null
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  // If action passed on to reducer is not BOOK_SELECTED keep state
  return state;
}
