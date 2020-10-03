const initialState = {
  books: [],
  loading: true
};

const reducer = (statе = initialState, action) => {
  switch (action.type) {
    case "BOOKS_LOADED":
      return {
        books: action.payload,
        loading: false
      };
    default:
      return statе;
  }
};

export default reducer;
