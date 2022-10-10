import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import "../../styles/footer.css";

const Footer = () => {
  return (
    <section className="footer py-5">
      <Container>
        <Row>
          <Col lg="4" md="6" className="mb-4">
            <div className="logo d-flex align-items-center gap-2">
              <h4 className="title_header text-white">Multimart</h4>
            </div>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </p>
          </Col>
          <Col lg="3" md="6" className="mb-4">
            <ul class="list-group border-0">
              <h3 className="list-group-title">Top Categories</h3>
              <li class="list-group-item border-0 bg-transparent">
                Mobile Phones
              </li>
              <li class="list-group-item border-0 bg-transparent">
                Modern Sofa
              </li>
              <li class="list-group-item border-0 bg-transparent">Arm Chair</li>
              <li class="list-group-item border-0 bg-transparent">
                Smart Watchs
              </li>
            </ul>
          </Col>
          <Col lg="2" md="6" className="mb-4">
            <ul class="list-group border-0">
              <h3 className="list-group-title">Useful Links</h3>
              <li class="list-group-item border-0 bg-transparent">
                <Link to="/shop">Shop</Link>
              </li>
              <li class="list-group-item border-0 bg-transparent">
                <Link to="/cart">Cart</Link>
              </li>
              <li class="list-group-item border-0 bg-transparent">
                <Link to="/login">Login</Link>
              </li>
              <li class="list-group-item border-0 bg-transparent">
                Privacy Policy
              </li>
            </ul>
          </Col>
          <Col lg="3" md="6" className="mb-4">
            <ul class="list-group border-0">
              <h3 className="list-group-title">Contact</h3>
              <li class="list-group-item border-0 bg-transparent d-flex">
                <i class="ri-map-pin-line"></i>
                <span>123 ZindaBazar, Sylhet, Bengladesh</span>
              </li>
              <li class="list-group-item border-0 bg-transparent">
                <i class="ri-phone-line"></i>
                <span>+0881234567890</span>
              </li>
              <li class="list-group-item border-0 bg-transparent">
                <i class="ri-mail-line"></i>
                <span>example123@gmail.com</span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
