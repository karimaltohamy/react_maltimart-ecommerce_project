import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Shop from "../pages/Shop";
import CheckOut from "../pages/CheckOut";
import ProductDetails from "../pages/ProductDetails";
import Login from "../pages/Login";
import Signup from "../pages/Signup.jsx";
import ProductedRoute from "./ProductedRoute";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="home" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="shop" element={<Shop />} />
      <Route
        path="checkoOut"
        element={
          <ProductedRoute>
            <CheckOut />
          </ProductedRoute>
        }
      />
      <Route path="shop/:id" element={<ProductDetails />} />
      <Route path="login" element={<Login />}></Route>
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
};

export default Routers;
