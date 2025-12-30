import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1 style={{ color: "white", fontWeight: "bold", cursor: "pointer" }} onClick={scrollToTop}>
              Huy Nguyen
            </h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="mailto:duchuyn0411@gmail.com"><img src={navIcon1} alt="" /></a>
              <a href="https://www.linkedin.com/in/huy-nguy3n/" target="_blank" rel="noreferrer"><img src={navIcon2} alt="" /></a>
              <a href="https://github.com/huy-nguy3n" target="_blank" rel="noreferrer"><img src={navIcon3} alt="" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
