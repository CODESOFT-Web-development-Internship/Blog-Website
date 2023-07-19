import { Row, Dropdown } from "antd";
import "./NavStyle.css";
import { GithubOutlined } from "@ant-design/icons";
import logo from "../../images/Transaprent logo.png";
import blog16 from "../../assets/blog/blog19.jpg";
import { Link } from "react-router-dom";

const items = [
  {
    key: "1",
    label: <Link to={"/Profile"}>Profile</Link>,
  },
  {
    key: "2",
    label: <Link to={""}>Logout</Link>,
  },
];
function Navigation() {
  return (
    <>
      <Row className="NavBox" justify={"space-between"} align={"middle"}>
        <Row className="logo">
          <Link to={"/"}>
            <img src={logo} width={250} />
          </Link>
        </Row>
        <Row>
          <ul className="MenuList">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/BlogPage">
              <li >Blog</li>
            </Link>
            <li>About</li>

            <Link to={"/ContactPage"}>
              <li>Contact</li>
            </Link>
          </ul>
        </Row>
        <Row justify={"center"} align={"middle"}>
          <Link to="/NewPost">
            {" "}
            <button className="btn">Add Post</button>
          </Link>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomLeft"
            arrow
          >
            <img className="profile" src={blog16} width={40} height={40} />
          </Dropdown>
        </Row>
      </Row>
    </>
  );
}
export default Navigation;
