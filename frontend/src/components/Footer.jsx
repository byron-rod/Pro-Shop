import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>
              ProShop by{" "}
              <a
                href="https://www.byronrodriguez.com"
                target="_blank"
                rel="noreferrer"
              >
                Byron Rodriguez
              </a>{" "}
              &copy; {currentYear}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
