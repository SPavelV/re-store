const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [
    {
      id: 1,
      name: "Book 1",
      count: 3,
      total: 150,
    },
    {
      id: 2,
      name: "Book 2",
      count: 2,
      total: 10,
    },
    {
      id: 3,
      name: "Book 3",
      count: 2,
      total: 100,
    },
  ],
  orderTotal: 260,
};

const reducer = (statе = initialState, action) => {
  switch (action.type) {
    case "FETCH_BOOKS_REQUEST":
      return {
        ...statе,
        books: [],
        loading: true,
        error: null,
      };
    case "FETCH_BOOKS_SUCCESS":
      return {
        ...statе,
        books: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_BOOKS_FAILURE":
      return {
        ...statе,
        books: [],
        loading: false,
        error: action.payload,
      };
    default:
      return statе;
  }
};

export default reducer;
