import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="d-flex justify-content-between align-items-center px-4 py-3 bg-dark">
      <h3 className="text-light">Tech-Shop</h3>

      <div className="d-flex gap-4 fs-5">
        <Link className="text-light">
          <i className="fa-solid fa-magnifying-glass"></i>
        </Link>

        <Link className="text-light">
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>

        <Link className="text-light">
          <i className="fa-regular fa-user"></i>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
