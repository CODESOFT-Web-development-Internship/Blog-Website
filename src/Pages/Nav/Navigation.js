import { Row } from "antd";
import "./NavStyle.css";
import { GithubOutlined } from "@ant-design/icons";
import logo from "../../images/Transaprent logo.png";
import blog16 from "../../assets/blog/blog19.jpg";
function Navigation() {
  return (
    <>
      <Row className="NavBox" justify={"space-between"} align={"middle"}>
        <Row className="logo">
          <img src={logo} width={250} />
        </Row>
        <Row>
          <ul className="MenuList">
            <li>Home</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </Row>
        <Row justify={"center"} align={"middle"}>
          <button className="btn">Add Post</button>

          <img className="profile" src={blog16} width={40} height={40} />
        </Row>
      </Row>
    </>
  );
}
export default Navigation;
