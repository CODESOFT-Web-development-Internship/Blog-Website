import { Col, Row, Tag, Rate } from "antd";
import "./SingleStylePost.css";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import coverImage from "../../assets/blog/blog19.jpg";
import print from "../../assets/icons/print.svg";
import share from "../../assets/icons/share.png";
import like from "../../assets/icons/LIKE.png";
import comment from "../../assets/icons/comment.png";
import view from "../../assets/icons/view.png";
import { Link, useLocation } from "react-router-dom";
import SidebarSear from "./widgts/sidebarSearchBar";
import ConnectWithUs from "./widgts/ConnectWithUs";
import Category from "./widgts/Category";
import CommentSection from "./widgts/CommentSection";
import ContactSection from "../Contact/ContactCom";
import ImportPageList from "./widgts/ImportPageList";
import { useEffect } from "react";
const customIcons = {
  1: <FrownOutlined size={"400px"} />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

const onPrint=()=>
{
  window.print();
  print("print");
}
function SinglePost() {
  const location = useLocation();
  const blogData = location.blogData;


  useEffect(()=>{
    console.log(blogData);
  })
  return (
    <>
      <Row className="SinglePost" justify={"space-between"}>
        <Col span={15}>
          <img
            src={coverImage}
            width={860}
            height={400}
            className="CoverImage"
          />
          <Col className="PostDetails" span={24}>
            <h1 className="BlogHeading">
            Neeon - WordPress News Magazine Theme
            </h1>
            <Row justify={"space-between"} className="IconBox">
              <Row align={"middle"}>
                <Row align={"top"} justify={"center"} to="">
                  <div className="IconDIv">
                    <img className="Icons" src={like} width={18} /> 200
                  </div>
                </Row>
                
                <Row align={"top"} justify={"center"} to="">
                  <div className="IconDIv">
                    <img className="Icons" src={comment} width={18} /> 200
                  </div>
                </Row>
                <Row align={"top"} justify={"center"} to="">
                  <div className="IconDIv">
                    <img className="Icons" src={view} width={18} /> 200
                  </div>
                </Row>
              </Row>
             
              <Row align={"middle"} >
              <Rate className="Icons" 
              defaultValue={4}
              character={({ index }) => customIcons[index + 1]}
            />
                <Link to="">
                  <img className="Icons" src={share} width={18} height={18} />
                </Link>
             
                  <img className="Icons" src={print} width={18} height={18} onClick={onPrint} />{" "}
             
              </Row>
            </Row>
            <p>
              Ahen an unknown printer took a galley of type and their scrambled
              imaketype specimen book has follorrvived not only fiver
              centuriewhen an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>

            <p>
              Travel orem Ipsum has been the industry’s standard dummy text ever
              since the 1500s, when an unknown printer took a gallery Followe
              yof type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronics are o nic typesetting, remaining essentially
              unchanged.
            </p>

            <p>
              Mravel orem Ipsum has been the industry’s standard dummy text ever
              since the 1500s, when an unknown printer took a galleyof typed
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electro nic
              typesetting, remain ing essentially unchanged.
            </p>
            <h1>Middle Post Heading</h1>
            <p>
              Our should never complain, complaining is a weak emotion, you got
              life, we breathing, we blessed. Surround yourself with angels.
              They never said winning was easy. Some people can’t handle
              success, I can. Look at the sunset, life is amazing, life is
              beautiful, life is what A federal government initiated report
              conducted by the.
            </p>
            <Row>
              <div className="has">#</div>
              <div className="tags">Tags : </div>
            </Row>
            <Row>
              <Tag color="success">AI</Tag>
              <Tag color="processing">Blog</Tag>
              <Tag color="error">Tech news</Tag>
              <Tag color="warning">Unboxing</Tag>
              <Tag color="error">error</Tag>
              <Tag color="warning">warning</Tag>
            </Row>
          </Col>
          {/* <Row justify={"center"} className="RateBox">
            
          </Row> */}
          <CommentSection />
        </Col>

        <Col className="SideBar" span={8}>
          <SidebarSear />
          <br></br>
          <br></br>
          <br></br>
          <ConnectWithUs />
          <br></br>
          <Category />
          <br></br>
          <ContactSection />
          <br></br>
          <ImportPageList />
        </Col>
      </Row>
    </>
  );
}

export default SinglePost;
