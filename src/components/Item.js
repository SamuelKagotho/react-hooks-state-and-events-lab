import React, { useState } from "react";

function Item({ name, category }) {
  const [inCartStatus, updateCartStatus] = useState(false);

  function toggleCart() {
    updateCartStatus((currentStatus) => !currentStatus);
  }

  return (
    <li className={inCartStatus ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={inCartStatus ? "remove" : "add"}
        onClick={toggleCart}
      >
        {inCartStatus ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;

