import { Row, Col } from "antd";
import github from "../../../assets/icons/github.svg";
import youtube from "../../../assets/icons/youtube.svg";
import linkedin from "../../../assets/icons/linkedin.svg";
import insta from "../../../assets/icons/insta.svg";
import "./sidewiedget.css";
function ConnectWithUs() {
  return (
    <Col className="sideBar1">
      <h2 className="LargeHeading">Connect With Us</h2>
      <a href="https://github.com/MrNitishroy" target="_blank">
        <Row className="socialMedia" align={"middle"}>
          <img src={github} style={{ marginRight: "10px" }} width={30} />
          Github - 400 Followers
        </Row>
      </a>

      <a href="https://www.youtube.com/channel/UCCbgU4H2YQVZUqQmhZXKpfQ"  target="_blank">
        <Row className="socialMedia youtube" align={"middle"}>
          <img src={youtube} style={{ marginRight: "10px" }} width={30} />
          Youtube - 400 Followers
        </Row>
      </a>

      <a href="https://www.linkedin.com/in/mrnitishkumar/"  target="_blank">
        <Row className="socialMedia linkedin" align={"middle"}>
          <img src={linkedin} style={{ marginRight: "10px" }} width={30} />
          linkedin - 400 Followers
        </Row>
      </a>
    </Col>
  );
}
export default ConnectWithUs;
