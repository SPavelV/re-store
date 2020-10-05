const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 0,
};

const updateCartItems = (cartItmes, item, idx) => {
  if (idx === -1) {
    return [...cartItmes, item];
  }

  return [...cartItmes.slice(0, idx), item, ...cartItmes.slice(idx + 1)];
};

const updateCartItem = (book, item = {}) => {
  const { id = book.id, count = 0, title = book.title, total = 0 } = item;

  return {
    id,
    title,
    count: count + 1,
    total: total + book.price,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BOOKS_REQUEST":
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      };
    case "FETCH_BOOKS_SUCCESS":
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_BOOKS_FAILURE":
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload,
      };
    case "BOOK_ADDED_TO_CART":
      const bookId = action.payload;
      const book = state.books.find((book) => book.id === bookId);
      const itemIdx = state.cartItems.findIndex(({ id }) => id === book.id);
      const item = state.cartItems[itemIdx];

      const newItem = updateCartItem(book, item);

      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, itemIdx),
      };

    case "BOOKS_REMOVED_FROM_CART":
      const removedBookIndex = state.cartItems.findIndex(
        ({ id }) => action.payload === id
      );
      const removeBook = state.cartItems[removedBookIndex];
      debugger;
      const bookPrice = state.books.find(
        (book) => book.id === action.payload.id);

      if (removeBook.count === 1) {
        const items = [state.cartItems].filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          cartItems: items,
        };
      } else {
        const items = [...state.cartItems];
        items[removedBookIndex].count -= 1;
        items[removedBookIndex].total -= bookPrice.price;
        return {
          ...state,
          cartItems: items,
        };
      }

    case "ALL_BOOKS_REMOVED_FROM_CART":
      const cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      return {
        ...state,
        cartItems,
      };

    default:
      return state;
  }
};

export default reducer;
