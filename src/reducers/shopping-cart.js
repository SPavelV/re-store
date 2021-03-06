
const updateCartItems = (cartItmes, item, idx) => {
  if (item.count === 0) {
    return [...cartItmes.slice(0, idx), ...cartItmes.slice(idx + 1)];
  }

  if (idx === -1) {
    return [...cartItmes, item];
  }

  return [...cartItmes.slice(0, idx), item, ...cartItmes.slice(idx + 1)];
};

const updateCartItem = (book, item = {}, quantity) => {
  const { id = book.id, count = 0, title = book.title, total = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price,
  };
};

const updateOrder = (state, bookId, quantity) => {
  const {
    bookList: { books },
    shoppingCart: { cartItems },
  } = state;
  const book = books.find(({ id }) => id === bookId);
  const itemIdx = cartItems.findIndex(({ id }) => id === book.id);
  const item = cartItems[itemIdx];

  const newItem = updateCartItem(book, item, quantity);

  return {
    orderTotal: 0,
    cartItems: updateCartItems(cartItems, newItem, itemIdx),
  };
};

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
    };
  }

  switch (action.type) {
    case "BOOK_ADDED_TO_CART":
      return updateOrder(state, action.payload, 1);
    case "BOOKS_REMOVED_FROM_CART":
      return updateOrder(state, action.payload, -1);
    case "ALL_BOOKS_REMOVED_FROM_CART":
      const item = state.shoppingCart.cartItems.find(
        ({ id }) => id === action.payload
      );
      return updateOrder(state, action.payload, -item.count);
    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;