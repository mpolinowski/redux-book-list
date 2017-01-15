export function selectBook(book) {
  // SelectBook is an ActionCreator - returns action object with type property
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  };
}
