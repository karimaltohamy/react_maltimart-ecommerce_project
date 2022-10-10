import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import { addCart } from "../../store/slices/cartSlice";
import { motion } from "framer-motion";

import "../../styles/productCard.css";
import { toast } from "react-toastify";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const addCartFun = () => {
    dispatch(
      addCart({
        id: item.id,
        productName: item.productName,
        imgUrl: item.imgUrl,
        category: item.category,
        price: item.price,
      })
    );
    toast.success("Product added successfully");
  };
  return (
    <Col lg="3" md="4" sm="6" className="mt-4">
      <div>
        <motion.img
          whileHover={{ scale: 1.1 }}
          className="product_card_img"
          src={item.imgUrl}
          alt="imgProduct"
        />
        <Link to={`/shop/${item.id}`}>
          <h3 className="title_product">{item.productName}</h3>
        </Link>
        <span className="type_catigory">{item.category}</span>
        <div className="d-flex align-items-center justify-content-between">
          <span className="price">${item.price}</span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="add_cart_btn"
            onClick={addCartFun}
          >
            <i class="ri-add-line"></i>
          </motion.button>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
