import React from "react";
import "./book-list-item.css";

const BookListItem = ({ book }) => {
  const { title, author, price, coverImage } = book;
  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={coverImage} alt="cover"/>
      </div>
      <div className="book-details">
        <a href="#" className="book-title">{title}</a>
        <span className="book-author">{author}</span>
        <span className="book-price">{price}</span>
        <button className="btn btn-info add-to-cart">Add to cart</button>
      </div>
    </div>
  );
};

export default BookListItem;
