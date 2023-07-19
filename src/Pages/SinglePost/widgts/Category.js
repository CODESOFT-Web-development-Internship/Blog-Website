import { Col } from "antd";
import "./sidewiedget.css";
import { Link } from "react-router-dom";
const cate = ["New Video", "Blog", "Machine", "Tech", "flutter", "React Js"];

function Category() {
  return (
    <>
      <h2 className="LargeHeading">Category</h2>
      <Col className="Category">

 {cate.map((e)=><Link><div className="CateDiv">{e}</div></Link>)}
      </Col>
    </>
  );
}
export default Category;
