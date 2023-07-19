import { Col, Row } from "antd";
import "./sidewiedget.css";
import pic1 from "../../../assets/blog/blog1.jpg";
import pic2 from "../../../assets/blog/blog2.jpg";
import pic3 from "../../../assets/blog/blog3.jpg";
import pic4 from "../../../assets/blog/blog4.jpg";
import pic5 from "../../../assets/blog/blog5.jpg";
import pic6 from "../../../assets/blog/blog6.jpg";
import pic7 from "../../../assets/blog/blog7.jpg";
var commentList = [
  {
    name: "Nitish kumar",
    comment: "this is bahut achha website hai",
    time: "10 hours ago",
    profileUrl: pic1,
  },
  {
    name: "Rishi kumar",
    comment: "this is bahut achha website hai",
    time: "10 hours ago",
    profileUrl: pic2,
  },
  {
    name: "Vikash kumar",
    comment: "this is bahut achha website hai",
    time: "10 hours ago",
    profileUrl: pic3,
  },
  {
    name: "Saloni kumar",
    comment: "this is bahut achha website hai",
    time: "10 hours ago",
    profileUrl: pic4,
  },
];
function CommentSection() {
  return (
    <>
      <Row className="commentMainBox" justify={"center"} align={"middle"}>
        <Col style={{ width: "100%" }} className="commentBox" span={18}>
          <h2 className="LargeHeading">Comment ❤️ </h2>
        
          <br />
          <textarea
            className="TextField message"
            placeholder="Write comment . .  "
            type="email"
          />
          <br />
          <br />
          <button className="btn"> Comment 📁</button>
          <br />
          <br />
          <br />
          <br />
          {commentList.map((e) => (
            <Row className="allCommentBox" align={"middle"}>
              <img
                className="profilePic"
                src={e.profileUrl}
                width={50}
                height={50}
              />

              <Col className="info">
              <p className="CommentName">{e.name}</p>
              <p className="Comments">{e.comment}</p>
              <p className="Comments">{e.time}</p>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </>
  );
}

export default CommentSection;
