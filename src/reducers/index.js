const initialState = {
  books: [],
};

const reducer = (statе = initialState, action) => {
  switch (action.type) {
    case "BOOKS_LOADED":
      return {
        books: action.payload,
      };
    default:
      return statе;
  }
};

export default reducer;
