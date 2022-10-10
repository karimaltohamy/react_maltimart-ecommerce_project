import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import imgLimite from "../../assets/images/counter-timer-img.png";
import "../../styles/limitedOffers.css";

import { motion } from "framer-motion";

const LimitedOffers = () => {
  const [days, setdays] = useState(null);
  const [hours, sethours] = useState(null);
  const [minutes, seminutes] = useState(null);
  const [secound, setsecound] = useState(null);

  const countDwon = () => {
    const destination = new Date("oct 30 , 2022").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const defferent = destination - now;

      const days = Math.floor(defferent / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (defferent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((defferent % (1000 * 60 * 60)) / (1000 * 60));
      const secound = Math.floor((defferent % (1000 * 60)) / 1000);

      if (destination < 0) {
        clearInterval(interval);
      } else {
        setdays(days);
        sethours(hours);
        seminutes(minutes);
        setsecound(secound);
      }
    });
  };

  useEffect(() => {
    countDwon();
  }, []);
  return (
    <div className="limiteOffers py-3 text-white">
      <Container>
        <Row className="align-items-center">
          <Col lg="6" sm="12" className="text-center text-lg-start">
            <span className="mb-2">Limited Offers</span>
            <h4 className="mb-3">Quality ArmChair</h4>
            <div className="limite_wrapper d-flex gap-3 align-items-center my-4 justify-content-center justify-content-lg-start">
              <div className="limite_data text-center">
                <span className="fs-3">{days}</span>
                <span>Days</span>
              </div>
              <span>:</span>
              <div className="limite_data text-center">
                <span className="fs-3">{hours}</span>
                <span>Hours</span>
              </div>
              <span>:</span>
              <div className="limite_data text-center">
                <span className="fs-3">{minutes}</span>
                <span>Minutes</span>
              </div>
              <span>:</span>
              <div className="limite_data text-center">
                <span className="fs-3">{secound}</span>
                <span>Seconds</span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              to="shop"
              className="secound_btn"
            >
              <Link to="/shop">Visit Store</Link>
            </motion.button>
          </Col>
          <Col lg="6" sm="12" className="text-center">
            <img className="img_limite" src={imgLimite} alt="counterImg" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LimitedOffers;
