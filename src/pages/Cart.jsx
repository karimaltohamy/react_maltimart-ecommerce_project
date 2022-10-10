import React from "react";
import Helemt from "../components/Helmet/Helmet";
import CommonSection from "../components/commonSection/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import "../styles/cart.css";
import { deleteCart } from "../store/slices/cartSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cartitems);
  const { totalAmount } = useSelector((state) => state.cartitems);
  const dispatch = useDispatch();

  return (
    <Helemt name="cart">
      <CommonSection title={"Shopping cart"} />
      <section>
        <Container>
          <Row>
            <Col lg="9" md="12" className="mb-4 mb-md-0">
              {cartItems.length === 0 ? (
                <h2>No item added to the cart</h2>
              ) : (
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th className="d-none d-sm-table-cell">Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <img
                              className="img_cart_item"
                              src={item.imgUrl}
                              alt="img_cart_item"
                            />
                          </td>
                          <td className="d-none d-sm-table-cell">
                            {item.productName}
                          </td>
                          <td>${item.price}</td>
                          <td>{item.quantity}</td>
                          <td
                            onClick={() => {
                              dispatch(deleteCart(item.id));
                              toast.success("deleted item cart");
                            }}
                          >
                            <i class="ri-delete-bin-6-line delete"></i>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3" md="12">
              <div className="d-flex align-items-center justify-content-between Subtotal">
                Subtotal
                <span className="total_amount">${totalAmount}</span>
              </div>
              <p className="mt-2 text_total_amount">
                texes and shiping will calulate in checkout
              </p>
              <Link to="/shop" className="main_btn d-block w-fitContent mt-3">
                Continue Shopping
              </Link>
              <Link
                to="/checkoOut"
                className="main_btn d-block w-fitContent mt-4"
              >
                Checkout
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helemt>
  );
};

export default Cart;
