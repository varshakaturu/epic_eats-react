import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
            <h2>Nothing Brings People Together Like a Good Burger</h2>
<p>
  A delicious burger has the power to unite people, creating moments of joy and togetherness. 
  With every bite, you experience a perfect blend of flavors, crafted to satisfy your cravings and bring smiles to the table.
</p>
<ul>
  <li>
    <p>
      Juicy and flavorful, made with the finest ingredients to give you an unforgettable taste experience.
    </p>
  </li>
  <li>
    <p>Expertly crafted with fresh toppings and a soft, toasted bun for the perfect balance.</p>
  </li>
  <li>
    <p>
      A burger so good, it keeps you coming back for more, making every meal a special occasion.
    </p>
  </li>
</ul>

            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      
    </>
  );
}

export default Section4;
