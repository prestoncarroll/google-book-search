import React from "react";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <li>
    <Link to="./Cart" className={window.location.pathname === "/cart" ? "nav-link active" : "nav-link"}>
      Cart
    </Link>
    </li>

  )
}


export default Cart;