const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
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
    case "BOOK_ADDED_TO_CART":
      const bookId = action.payload;
      const book = statе.books.find((book) => book.id === bookId);
      const newItem = {
        id: book.id,
        name: book.title,
        count: 1,
        total: book.price,
      };

      return {
        ...statе,
        cartItems: [
          ...statе.cartItems,
          newItem
        ]
      }

    default:
      return statе;
  }
};

export default reducer;
