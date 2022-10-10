import React from "react";
import Helemt from "../components/Helmet/Helmet";
import CommonSection from "../components/commonSection/CommonSection";
import { Container, Row, Col } from "reactstrap";
import "../styles/checkout.css";
import { useSelector } from "react-redux";

const CheckOut = () => {
  const { totalAmount, totalQuantity } = useSelector(
    (state) => state.cartitems
  );
  return (
    <Helemt name="checkout">
      <CommonSection title="CheckOut" />
      <Container>
        <Row className="py-5">
          <Col lg="8">
            <h4 className="title_checkout">Billing Information</h4>
            <form>
              <input
                className="input_checkout"
                type="text"
                placeholder="Enter your name"
              />
              <input
                className="input_checkout"
                type="email"
                placeholder="Enter your email"
              />
              <input
                className="input_checkout"
                type="number"
                placeholder="Phone number"
              />
              <input
                className="input_checkout"
                type="text"
                placeholder="Street address"
              />
              <input
                className="input_checkout"
                type="text"
                placeholder="City"
              />
              <input
                className="input_checkout"
                type="text"
                placeholder="Poatal code"
              />
              <input
                className="input_checkout"
                type="text"
                placeholder="Countery"
              />
            </form>
          </Col>
          <Col lg="4">
            <div className="checkout_box">
              <div className="checkout_box_line d-flex justify-content-between mb-3">
                <span>Total Qty:</span>
                <span>{totalQuantity} items</span>
              </div>
              <div className="checkout_box_line d-flex justify-content-between mb-3">
                <span>Subtotal:</span>
                <span>${totalAmount}</span>
              </div>
              <div className=" checkout_box_line d-flex justify-content-between mb-3">
                <span>
                  Total Qty: <br /> free shipping
                </span>
                <span>$0</span>
              </div>
              <div className="total_cost d-flex justify-content-between mb-2">
                <span>Total Cost:</span>
                <span>${totalAmount}</span>
              </div>
              <button className="secound_btn w-100">place an order</button>
            </div>
          </Col>
        </Row>
      </Container>
    </Helemt>
  );
};

export default CheckOut;
