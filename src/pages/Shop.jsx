import React, { useState } from "react";
import CommonSection from "../components/commonSection/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.css";
import ProductList from "../components/ProductList/ProductList";
import products from "../assets/data/products";

const Shop = () => {
  const [productsData, setProductData] = useState(products);

  const filterSelectedfun = (e) => {
    const valueselect = e.target.value;
    if (valueselect === "sofa") {
      const filterData = products.filter((item) => item.category === "sofa");
      setProductData(filterData);
    } else if (valueselect === "mobile") {
      const filterData = products.filter((item) => item.category === "mobile");
      setProductData(filterData);
    } else if (valueselect === "chair") {
      const filterData = products.filter((item) => item.category === "chair");
      setProductData(filterData);
    } else if (valueselect === "watch") {
      const filterData = products.filter((item) => item.category === "watch");
      setProductData(filterData);
    } else if (valueselect === "wireless") {
      const filterData = products.filter(
        (item) => item.category === "wireless"
      );
      setProductData(filterData);
    } else {
      setProductData(products);
    }
  };

  const filterInputFun = (e) => {
    const value = e.target.value;

    const filterData = products.filter((item) => {
      return item.productName
        .toLocaleLowerCase()
        .includes(value.toLocaleLowerCase());
    });

    setProductData(filterData);
  };
  return (
    <Helmet name="shop">
      <CommonSection title={"Products"} />
      <Container>
        <Row className="filteration_Products py-5 text-center">
          <Col lg="3" md="3" sm="6" className="mb-3 mb-md-0">
            <select className="shop_select" onChange={filterSelectedfun}>
              <option defaultValue>Filter By Category</option>
              <option value="sofa">Sofa</option>
              <option value="mobile">Mobile</option>
              <option value="chair">Chair</option>
              <option value="watch">Watch</option>
              <option value="wireless">Wireless</option>
            </select>
          </Col>
          <Col lg="3" md="3" sm="6" className="mb-3 mb-md-0">
            <select className="shop_select">
              <option defaultValue>Sort By</option>
              <option value="Ascending">Ascending</option>
              <option value="Descending">Descending</option>
            </select>
          </Col>
          <Col lg="6" md="6">
            <form className="form_search_shop d-flex align-items-center">
              <input
                type="text"
                placeholder="Search...."
                onChange={filterInputFun}
              />
              <i class="ri-search-line"></i>
            </form>
          </Col>
        </Row>
        <Row className="py-5">
          {productsData.length <= 0 ? (
            <h1>No Products Here!</h1>
          ) : (
            <ProductList data={productsData} />
          )}
          <ProductList data={productsData} />
        </Row>
      </Container>
    </Helmet>
  );
};

export default Shop;
