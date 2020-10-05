import React from "react";
import { connect } from "react-redux";
import { allBooksRemovedFromCart, booksRemovedFromCart } from '../../actions'
import "./shopping-cart-table.css";

const ShoppingCartTable = ({
  items,
  total,
  onIncreace,
  onDecreace,
  onDelete,
}) => {
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;

    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            onClick={() => onIncreace(id)}
            className="btn btn-outline-success"
          >
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => onDecreace(id)}
            className="btn btn-outline-warning"
          >
            <i className="fa fa-minus-circle" />
          </button>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger"
          >
            <i className="fa fa-trash-o" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="shopping-cart-table">
      <h2>Your order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </table>
      <div className="total">Total: ${total}</div>
    </div>
  );
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncreace: (id) => {
      console.log(`Increase ${id}`);
    },
    onDelete:(id) => dispatch(allBooksRemovedFromCart(id)),
    onDecreace: (id) => dispatch(booksRemovedFromCart(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
