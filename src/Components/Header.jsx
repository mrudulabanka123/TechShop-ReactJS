import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="d-flex justify-content-between align-items-center px-4 py-3 bg-dark">
     <b><Link className="text-light" to="/" style={{textDecorationLine:"none",fontSize:"24px"}}>Tech-Shop</Link></b> 

      <div className="d-flex gap-4 fs-5">
        <Link  className="text-light" >
          <i className="fa-solid fa-magnifying-glass"></i>
        </Link>

        <Link className="text-light" to="/cart">
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>

        <Link className="text-light" to="/login">
          <i className="fa-regular fa-user"></i>
        </Link>
      </div>
    </nav>
  );
};


