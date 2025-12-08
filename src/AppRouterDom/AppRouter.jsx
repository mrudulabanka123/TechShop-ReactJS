import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";

import Cart from "../Pages/Cart";
import Login from "../Pages/Login";


function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
     
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
     
    </Routes>
  );
}

export default AppRouter;
