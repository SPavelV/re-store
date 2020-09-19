const initialState = {
  books: [ {
    id: 1,
    title: "Production-Ready Microservices",
    author: "Susan J. Fowler",
  },
  {
    id: 2,
    title: "Release it!",
    author: "Michael T. Nygard",
  },],
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
