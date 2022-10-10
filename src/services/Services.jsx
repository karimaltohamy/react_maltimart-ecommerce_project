import React from "react";
import { Container, Row, Col } from "reactstrap";

import serviceData from "../assets/data/serviceData";

import "./services.css";
import { motion } from "framer-motion";
const Services = () => {
  return (
    <section className="py-4">
      <Container>
        <Row>
          {serviceData.map((item, index) => {
            return (
              <Col lg="3" md="4" sm="6" key={index}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="services_box mb-4 mb-lg-0"
                  style={{ backgroundColor: item.bg }}
                >
                  <div className="services_icon">
                    <i class={item.icon}></i>
                  </div>
                  <div className="services_content">
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                  </div>
                </motion.div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
