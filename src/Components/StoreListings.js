import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HEBLogo from "../HEB-Logo.png";
import sproutsLogo from "../sproutsLogo.png";
import krogerLogo from "../krogerLogo.png";


function StoreListings() {
  return (
    <div>
      <h2 className="display-6 m-1 text-center">Browse stores in Houston</h2>
      <Container style={{ marginTop: "40px" }}>
        <Row
          style={{ borderBottom: "1px solid #E8E9EB"}}
          className="justify-content-center align-items-center mb-3"
        >
          <Col sm={4} className="d-flex align-items-center">
            <Image
              src={HEBLogo}
              style={{ height: "50px" }}
            />
            <Col style={{textAlign: "left"}}>
              <h5 style={{ fontWeight: "bold" }}>HEB</h5>
              <p>Delivery * Pickup</p>
            </Col>
          </Col>
          <Col sm={4} className="d-flex align-items-center">
            <Image
              src={sproutsLogo}
              style={{ height: "50px"}}
            />
            <Col style={{textAlign: "left"}}>
              <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
              <p>Delivery * Pickup</p>
            </Col>
          </Col>
          <Col sm={4} className="d-flex align-items-center">
            <Image
              src={krogerLogo}
              style={{ height: "50px"}}
            />
            <Col style={{textAlign: "left"}}>
              <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
              <p>Delivery</p>
            </Col>
          </Col>
        </Row>
        <Row
          style={{ borderBottom: "1px solid #E8E9EB"}}
          className="justify-content-center align-items-center"
        >
          <Col sm={4} className="d-flex align-items-center">
            <Image
              src={HEBLogo}
              style={{ height: "50px" }}
            />
            <Col style={{textAlign: "left"}}>
              <h5 style={{ fontWeight: "bold" }}>HEB</h5>
              <p>Delivery * Pickup</p>
            </Col>
          </Col>
          <Col sm={4} className="d-flex align-items-center">
            <Image
              src={sproutsLogo}
              style={{ height: "50px"}}
            />
            <Col style={{textAlign: "left"}}>
              <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
              <p>Delivery * Pickup</p>
            </Col>
          </Col>
          <Col sm={4} className="d-flex align-items-center">
            <Image
              src={krogerLogo}
              style={{ height: "50px"}}
            />
            <Col style={{textAlign: "left"}}>
              <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
              <p>Delivery</p>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default StoreListings;