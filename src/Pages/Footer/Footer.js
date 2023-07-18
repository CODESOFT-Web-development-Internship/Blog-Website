import { Col, Row } from "antd";
import "./FooterStyle.css";
import logo from "../../images/Transaprent logo.png";

function FooterSection() {
  return (
    <>
      <Row className="Footer" justify={"space-between"} align={"middle"}>
        <Col>
          <img src={logo} width={200} />
          <br></br>
          <Row>
            <Col>
              <p className="subt1">Email</p>
              <p className="subt2">Nitishr833@gmail.com</p>
            </Col>
            <Col className="sub">
              <p className="subt1">Phone number</p>
              <p className="subt2">+91 7033161175</p>
            </Col>
          </Row>
        </Col>
        <Col>
        <h3 className="footerHead">Learn new AI Technology <br></br>Daily</h3>
        <Row>
        <div className="primaryBtn">Learn More</div>
        <div className="secondryBtn">Learn More</div>
        </Row>
        </Col>
      </Row>
      <Row className="footerDiv"></Row>
    </>
  );
}
export default FooterSection;
