import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import StoreIOS from "../../assets/shop/appstore.webp";
import StoreGoogle from "../../assets/shop/googleplay.png";
import DownloadImage from "../../assets/shop/e-shop.png";
import Brand1 from "../../assets/brands/burger-11.jpg";
import Brand2 from "../../assets/brands/burger-12.jpg";
import Brand3 from "../../assets/brands/burger-13.jpg";


function Section5() {
  return (
    <>
      <section className="shop_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
            <h4>Download Our Mobile App and</h4>
<h2>Save Up to 20%</h2>
<p>
  Get exclusive discounts and special deals when you order through our mobile app. 
  Enjoy a seamless and convenient experience while saving more on your favorite meals!
</p>

              <Link to="/">
                <img
                  src={StoreIOS}
                  alt="IOS"
                  className="img-fluid store me-3"
                />
              </Link>
              <Link to="/">
                <img
                  src={StoreGoogle}
                  alt="Android"
                  className="img-fluid store me-3"
                />
              </Link>
            </Col>
            <Col lg={6}>
              <img src={DownloadImage} alt="e-shop" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
      
    </>
  );
}

export default Section5;
