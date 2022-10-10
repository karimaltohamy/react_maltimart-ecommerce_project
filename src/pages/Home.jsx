import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";

import hero_img from "../assets/images/hero-img.png";

import Services from "../services/Services";

import products from "../assets/data/products";

import { motion } from "framer-motion";

import "../styles/home.css";
import ProductList from "../components/ProductList/ProductList";
import LimitedOffers from "../components/limitedOffers/LimitedOffers";
import { Link } from "react-router-dom";

const Home = () => {
  const year = new Date().getFullYear();

  const [chairData, setCahirData] = useState(products);
  const [sofaData, setSofaData] = useState(products);
  const [mobileData, setMobileData] = useState(products);
  const [watchData, setWatchData] = useState(products);

  useEffect(() => {
    const funfilterChair = () => {
      return products.filter((item) => item.category === "chair");
    };

    const funfilterSofa = () => {
      return products.filter((item) => item.category === "sofa");
    };

    const funfilterMobile = () => {
      return products.filter((item) => item.category === "mobile");
    };
    const funfilterWatch = () => {
      return products.filter((item) => item.category === "watch");
    };

    setCahirData(funfilterChair);
    setSofaData(funfilterSofa);
    setMobileData(funfilterMobile);
    setWatchData(funfilterWatch);
  }, []);

  return (
    <Helmet name={"Home"}>
      <section className="hero_section py-5">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content text-md-start text-center">
                <span className="trending">Trending Product in {year}</span>
                <h1 className="title_hero py-4">
                  Make Your Interior More Minimalistic & Modern
                </h1>
                <p className="p_hero pb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="main_btn"
                >
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <img className="img_hero" src={hero_img} alt="hero_img" />
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section>
        <Container>
          <h1 className="text-center">Trending Products</h1>
          <Row>
            <ProductList data={chairData} />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <h1 className="text-center">Best Sales</h1>
          <Row>
            <ProductList data={sofaData} />
          </Row>
        </Container>
      </section>
      <LimitedOffers />
      <section>
        <Container>
          <h1 className="text-center">New Arrivals</h1>
          <Row>
            <ProductList data={mobileData} />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <h1 className="text-center">Popular in Category</h1>
          <Row>
            <ProductList data={watchData} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
