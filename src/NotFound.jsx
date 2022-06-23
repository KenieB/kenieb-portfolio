import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import mobile404 from "/images/404-mobile.svg";
import basic404 from "/images/404.svg";

/**
 * Defines the "Not Found" page that is displayed for any unmatched route.
 *
 * @returns {JSX.Element}
 */
function NotFound() {
  return (
    <>
      <Container fluid className="d-flex d-lg-none justify-content-center">
        <Image fluid src={mobile404} />
      </Container>

      <Container fluid className="d-none d-lg-flex justify-content-center">
        <Image fluid src={basic404} />
      </Container>
    </>
  );
}

export default NotFound;
