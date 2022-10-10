import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/commonSection/CommonSection";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import { addCart } from "../store/slices/cartSlice";

import products from "../assets/data/products";
import "../styles/productDetails.css";

import { toast } from "react-toastify";
import { motion } from "framer-motion";

import ProductList from "../components/ProductList/ProductList";

const ProductDetails = () => {
  let { id } = useParams();
  const dispatch = useDispatch();

  const refUserName = useRef(null);
  const refText = useRef(null);
  const [rating, setRating] = useState("");

  const [toggle, setToggle] = useState(false);
  const [likeCategory, setlikeCategory] = useState(products);

  const product = products.find((item) => item.id === id);
  const {
    productName,
    imgUrl,
    category,
    price,
    avgRating,
    shortDesc,
    description,
    reviews,
  } = product;

  const addCartFun = () => {
    dispatch(
      addCart({
        id: id,
        productName: productName,
        imgUrl: imgUrl,
        category: category,
        price: price,
      })
    );
    toast.success("Product added successfully");
  };

  const funHandelerRevuews = (e) => {
    e.preventDefault();
    const userName = refUserName.current.value;
    const text = refText.current.value;
    const newReview = {
      user: userName,
      text,
      rating,
    };
  };

  useEffect(() => {
    const funfilterData = () => {
      return products.filter((item) => item.category === category);
    };
    setlikeCategory(funfilterData);
  }, []);

  return (
    <Helmet name="ProductDetails">
      <CommonSection title={productName} />
      <section className="py-5">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={imgUrl} alt="img_Product_Details" />
            </Col>
            <Col lg="6" md="6">
              <div className="product">
                <h1 className="product_title">{productName}</h1>
                <div className="d-flex align-itmes-center gap-5 mt-1">
                  <div className="evaluation_stars">
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-half-s-line"></i>
                  </div>
                  <div className="d-flex align-items-center">
                    (
                    <p className="avgRating d-flex align-items-center">
                      <span>{avgRating} </span> ratings
                    </p>
                    )
                  </div>
                </div>
                <span className="price mt-3">${price}</span>
                <p className="mt-3">{shortDesc}</p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="main_btn mt-4"
                  onClick={addCartFun}
                >
                  Add To Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <div className=" d-flex aligv-items-center gap-4">
            <span
              className={`info_item ${toggle ? "active_info_item" : ""}`}
              onClick={() => setToggle(true)}
            >
              Description
            </span>
            <span
              className={`info_item ${!toggle ? "active_info_item" : ""}`}
              onClick={() => setToggle(false)}
            >
              Reviews(1)
            </span>
          </div>
          {toggle ? (
            <p className="description mt-4">{description}</p>
          ) : (
            <div className="reviews mt-4 ps-4">
              {reviews.map((item, index) => {
                return (
                  <div className="reviews_item mb-3" key={index}>
                    <h5>jhon Doe</h5>
                    <span className="d-flex">
                      <span>{item.rating}</span>(rating)
                    </span>
                    <p className="mt-2">{item.text}</p>
                  </div>
                );
              })}
              <form className="reviews_form mt-4" onSubmit={funHandelerRevuews}>
                <h3>Leave your experience</h3>
                <input type="text" placeholder="Enter name" ref={refUserName} />
                <div className="evaluation_stars_Choices d-flex gap-4 my-3">
                  <div
                    className="d-flex evaluation_stars_Choices_item"
                    onClick={() => setRating(1)}
                  >
                    <i class="ri-star-s-fill"></i>
                    <span>1</span>
                  </div>
                  <div
                    className="d-flex evaluation_stars_Choices_item"
                    onClick={() => setRating(2)}
                  >
                    <i class="ri-star-s-fill"></i>
                    <span>2</span>
                  </div>
                  <div
                    className="d-flex evaluation_stars_Choices_item"
                    onClick={() => setRating(3)}
                  >
                    <i class="ri-star-s-fill"></i>
                    <span>3</span>
                  </div>
                  <div
                    className="d-flex evaluation_stars_Choices_item"
                    onClick={() => setRating(4)}
                  >
                    <i class="ri-star-s-fill"></i>
                    <span>4</span>
                  </div>
                  <div
                    className="d-flex evaluation_stars_Choices_item"
                    onClick={() => setRating(5)}
                  >
                    <i class="ri-star-s-fill"></i>
                    <span>5</span>
                  </div>
                </div>
                <textarea type="text" placeholder="type text" ref={refText} />
                <button className="main_btn mt-5">Submit</button>
              </form>
            </div>
          )}
          <section>
            <Container>
              <h3 className="mb-3">You might also like</h3>
              <Row>
                <ProductList data={likeCategory} />
              </Row>
            </Container>
          </section>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
