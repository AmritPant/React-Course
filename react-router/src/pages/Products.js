import React from "react";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div>
      Product Page
      <ul>
        <li>
          <Link to="/products/book"> A book </Link>
        </li>
        <li>
          <Link to="/products/carpet"> A Carpet </Link>
        </li>
        <li>
          <Link to="/products/course"> A Online Course </Link>
        </li>
      </ul>
    </div>
  );
}

export default Products;
