import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";
import "./CSS/CheckoutSteps.css"; // Import the CSS file

const CheckoutSteps = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        <LinkContainer to="/login">
          <Nav.Link className={path === "/login" ? "active-step" : ""}>
            Sign In
          </Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/shipping">
          <Nav.Link className={path === "/shipping" ? "active-step" : ""}>
            Shipping
          </Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/payment">
          <Nav.Link className={path === "/payment" ? "active-step" : ""}>
            Payment
          </Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/placeorder">
          <Nav.Link className={path === "/placeorder" ? "active-step" : ""}>
            Place Order
          </Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
