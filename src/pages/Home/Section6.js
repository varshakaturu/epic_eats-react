import React from "react";
import { Container, Row, Carousel } from "react-bootstrap";
import User1 from "../../assets/blog/review-author-1.png";
import User2 from "../../assets/blog/review-author-1.png";
import User3 from "../../assets/blog/review-author-1.png";
import User4 from "../../assets/blog/review-author-1.png";

function Section6() {
  return (
    <section className="blog_section">
      <Container>
        <Row>
          <Carousel>
          <Carousel.Item>
  <Carousel.Caption>
    <div className="user_img">
      <img src={User1} className="img-fluid" alt="User-1" />
    </div>
    <p>
      "The best burgers I've ever had! Fresh ingredients, juicy patties, and the 
      delivery was super fast. Highly recommended!"
    </p>
    <div className="item_rating mb-2">
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
    </div>
    <h5>BY JASON MILLER</h5>
  </Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
  <Carousel.Caption>
    <div className="user_img">
      <img src={User2} className="img-fluid" alt="User-2" />
    </div>
    <p>
      "Absolutely delicious! The cheesy burger was my favorite. Perfectly cooked, 
      and the fries were crispy. Will order again!"
    </p>
    <div className="item_rating mb-2">
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
    </div>
    <h5>BY EMILY ROGERS</h5>
  </Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
  <Carousel.Caption>
    <div className="user_img">
      <img src={User3} className="img-fluid" alt="User-3" />
    </div>
    <p>
      "I ordered the double beef burger, and it was a game-changer! Super juicy 
      and flavorful, and the special sauce was amazing!"
    </p>
    <div className="item_rating mb-2">
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
    </div>
    <h5>BY MARK ANDERSON</h5>
  </Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
  <Carousel.Caption>
    <div className="user_img">
      <img src={User4} className="img-fluid" alt="User-4" />
    </div>
    <p>
      "Best burger delivery service! The packaging was neat, the burger was warm 
      and fresh, and the taste was just incredible."
    </p>
    <div className="item_rating mb-2">
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
    </div>
    <h5>BY SOPHIA REED</h5>
  </Carousel.Caption>
</Carousel.Item>

          </Carousel>
        </Row>
      </Container>
    </section>
  );
}

export default Section6;
