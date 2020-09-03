const initialState = {
  books: [],
};

const reducer = (stat = initialState, action) => {
  switch (action.type) {
    case "BOOKS_LOADED":
      return {
        books: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
