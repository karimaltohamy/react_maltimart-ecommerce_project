import React, { useEffect, useRef } from "react";
import { Container } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/eco-logo.png";
import img_user from "../../assets/images/user-icon.png";

import "../../styles/header.css";
import { useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const totalQuantity = useSelector((state) => state.cartitems.totalQuantity);

  const toggleActiveMenu = useRef("");
  const headerRef = useRef(null);

  const { currentUser } = useAuth();

  const navigate = useNavigate();

  const profileAtionsRef = useRef(null);

  const stickyHeaderFun = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        headerRef.current.classList.add("header_sticky");
      } else {
        headerRef.current.classList.remove("header_sticky");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFun();

    return () => window.removeEventListener("scroll", stickyHeaderFun);
  });

  const funToogleActiveMenu = () => {
    toggleActiveMenu.current.classList.toggle("active_navigation");
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out");
        navigate("/home");
      })
      .catch((error) => toast.error(error.message));
  };

  const profileAtionsToggle = () => {
    profileAtionsRef.current.classList.toggle("profile_actions_active");
  };

  return (
    <header className="py-3" ref={headerRef}>
      <Container className="d-flex align-items-center justify-content-between">
        <div className="logo d-flex align-items-center gap-2">
          <img className="logo_img" src={logo} alt="logo" />
          <h4 className="title_header">Multimart</h4>
        </div>
        <div
          className="navigation"
          ref={toggleActiveMenu}
          onClick={funToogleActiveMenu}
        >
          <ul className="menu d-flex align-items-center justify-content-center gap-5">
            <li className="menu_item">
              <NavLink
                to="home"
                className={({ isActive }) =>
                  isActive ? "active_menu_item" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="menu_item">
              <NavLink
                to="shop"
                className={({ isActive }) =>
                  isActive ? "active_menu_item" : ""
                }
              >
                Shop
              </NavLink>
            </li>
            <li className="menu_item">
              <NavLink
                to="cart"
                className={({ isActive }) =>
                  isActive ? "active_menu_item" : ""
                }
              >
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="header_icons d-flex align-items-center justify-content-center gap-3">
          <div className="favorite_icon">
            <i className="ri-heart-line"></i>
            <span>2</span>
          </div>
          <div className="shopping_icon">
            <i className="ri-shopping-bag-line"></i>
            <span>{totalQuantity}</span>
          </div>
          <div
            className="user_icon position-relative"
            onClick={profileAtionsToggle}
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              className="img_user"
              src={currentUser ? currentUser.photoURL : img_user}
              alt="user"
            />

            <div
              className="profile_actions"
              onClick={profileAtionsToggle}
              ref={profileAtionsRef}
            >
              {currentUser ? (
                <span
                  onClick={logout}
                  className="d-flex align-items-center justify-content-center h-100"
                >
                  Logout
                </span>
              ) : (
                <div
                  className="d-flex align-items-center justify-content-center flex-column
                "
                >
                  <Link to="/signup">Signup</Link>
                  <Link to="/login">Login</Link>
                </div>
              )}
            </div>
          </div>
          <div className="menu_icon" onClick={funToogleActiveMenu}>
            <i className="ri-menu-line"></i>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
