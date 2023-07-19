import { Col, Row } from "antd";
import "../SinglePost/widgts/sidewiedget.css"

function ContactSection() {
  return (
    <>
      <Row className="" justify={"center"} align={"middle"}>
        <Col style={{ width: "100%" }} className="commentBox" span={18}>
          <h2 className="LargeHeading">Comment ❤️ </h2>
          <input className="TextField" placeholder="Enter Name" type="text" />
          <br />
          <br />
          <input className="TextField" placeholder="Enter Email" type="email" />
          <br />
          <br />
          <textarea
            className="TextField message"
            placeholder="Enter Email"
            type="email"
          />
          <br />
          <br />
          <button className="btn"> Send Now 📁</button>
          <br />
          <br />
          <br />
          <br />
        
        </Col>
      </Row>
    </>
  );
}

export default ContactSection;
