import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/del-boy.avif";

// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Authentic Taste",
    paragraph: `Enjoy the rich and authentic flavors of our freshly baked pizzas, made with the finest ingredients, a crispy golden crust, and a perfect blend of cheeses and toppings.`,
  },
  {
    image: Salad,
    title: "Fresh & Healthy",
    paragraph: `Indulge in our refreshing and nutritious salads, packed with farm-fresh vegetables, crisp greens, and delicious dressings for a healthy and satisfying meal.`,
  },
  {
    image: Delivery,
    title: "Lightning-Fast Delivery",
    paragraph: `Get your favorite meals delivered hot and fresh to your doorstep in record time, ensuring a convenient and hassle-free dining experience anytime, anywhere.`,
  },
  // Add more mock data objects as needed
];


function Section2() {
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
            <h2>The burger tastes better when you eat it with your family</h2>
<p>
  Enjoying a delicious burger with your loved ones makes every meal more special. 
  The warmth of family, laughter, and shared moments enhance the taste, turning a simple meal 
  into a memorable experience. Good food is best enjoyed together!
</p>

              <Link to="/" className="btn order_now btn_red">
                Explore Full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;
