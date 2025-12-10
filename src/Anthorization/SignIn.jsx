import React from "react";
import { Link } from "react-router";

export const Header = ({ openLogin }) => {
  return (
    <>
      <header>
        <nav className="navbar navbar-dark bg-dark px-4">
          <Link className="navbar-brand fw-bold" to="/">
            Tech-Shop
          </Link>

          <div className="d-flex align-items-center gap-4">
            <Link to="/search" className="text-white fs-5">
              <i className="fa-solid fa-magnifying-glass"></i>
            </Link>

            <Link to="/cart" className="text-white fs-5">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>

            <span
              className="text-white fs-5"
              style={{ cursor: "pointer" }}
              onClick={openLogin}
            >
              <i className="fa-regular fa-user"></i>
            </span>
          </div>
        </nav>
      </header>
    </>
  );
};