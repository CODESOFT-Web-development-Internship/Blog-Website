import "../Home/Blog//BlogStyle.css";
import "./BlogPageStyle.css";
import { Col, Divider, Pagination, Row } from "antd";
import blog1 from "../../assets/blog/blog1.jpg";
import blog2 from "../../assets/blog/blog2.jpg";
import blog3 from "../../assets/blog/blog3.jpg";
import blog4 from "../../assets/blog/blog4.jpg";
import blog5 from "../../assets/blog/blog5.jpg";
import blog6 from "../../assets/blog/blog6.jpg";
import blog7 from "../../assets/blog/blog7.jpg";
import blog8 from "../../assets/blog/blog8.jpg";
import blog9 from "../../assets/blog/blog9.jpg";
import blog10 from "../../assets/blog/blog10.jpg";
import blog11 from "../../assets/blog/blog11.jpg";
import blog12 from "../../assets/blog/blog12.jpg";
import blog13 from "../../assets/blog/blog13.jpg";
import blog14 from "../../assets/blog/blog14.jpg";
import blog15 from "../../assets/blog/blog15.jpg";
import blog16 from "../../assets/blog/blog16.jpg";
import blog17 from "../../assets/blog/blog17.jpg";
import blog18 from "../../assets/blog/blog18.jpg";
import blog19 from "../../assets/blog/blog19.jpg";
import blog20 from "../../assets/blog/blog20.jpg";
import blog21 from "../../assets/blog/blog21.jpg";
import blog22 from "../../assets/blog/blog22.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SidebarSear from "../SinglePost/widgts/sidebarSearchBar";
import ConnectWithUs from "../SinglePost/widgts/ConnectWithUs";
import ContactSection from "../Contact/ContactCom";
import ImportPageList from "../SinglePost/widgts/ImportPageList";
import Category from "../SinglePost/widgts/Category";

var imageArry = [
  blog1,
  blog2,
  blog3,
  blog4,
  blog5,
  blog6,
  blog7,
  blog8,
  blog9,
  blog10,
  blog11,
  blog12,
  blog13,
  blog14,
  blog15,
  blog16,
  blog17,
  blog18,
  blog19,
  blog20,
  blog21,
  blog22,
];

const blogDataList = [
  {
    title: "How ai work",
    thumnails: blog1,
    subtitle:
      " W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While usingW3Schools, you agree to have read and accepted our terms of use,    cookie and privacy policy",
    author: "nitish kumar",
    date: "12-jan-2022",
  },
  {
    title: "How ai work",
    thumnails: blog2,
    subtitle:
      " W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While usingW3Schools, you agree to have read and accepted our terms of use,    cookie and privacy policy",
    author: "nitish kumar",
    date: "12-jan-2022",
  },
  {
    title: "How ai work",
    thumnails: blog3,
    subtitle:
      " W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While usingW3Schools, you agree to have read and accepted our terms of use,    cookie and privacy policy",
    author: "nitish kumar",
    date: "12-jan-2022",
  },
  {
    title: "How ai work",
    thumnails: blog4,
    subtitle:
      " W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While usingW3Schools, you agree to have read and accepted our terms of use,    cookie and privacy policy",
    author: "nitish kumar",
    date: "12-jan-2022",
  },
  {
    title: "How ai work",
    thumnails: blog5,
    subtitle:
      " W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While usingW3Schools, you agree to have read and accepted our terms of use,    cookie and privacy policy",
    author: "nitish kumar",
    date: "12-jan-2022",
  },
  {
    title: "How ai work",
    thumnails: blog6,
    subtitle:
      " W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While usingW3Schools, you agree to have read and accepted our terms of use,    cookie and privacy policy",
    author: "nitish kumar",
    date: "12-jan-2022",
  },
  {
    title: "Earn money form work from home work how to get work",
    thumnails: blog22,
    subtitle:
      " W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While usingW3Schools, you agree to have read and accepted our terms of use,    cookie and privacy policy",
    author: "nitish kumar",
    date: "12-jan-2022",
  },
  {
    title: "Earn money form work from home work how to get work",
    thumnails: blog21,
    subtitle:
      " W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While usingW3Schools, you agree to have read and accepted our terms of use,    cookie and privacy policy",
    author: "nitish kumar",
    date: "12-jan-2022",
  },
];

function BlogPage() {
  const [blogData, setBlogData] = useState([]);

  const fetchBlog = async () => {
    try {
      const response = await fetch(
        "https://localhost:7136/api/Post/GetAllPosts"
      );
      if (!response.ok) {
        console.log("Network response was not ok");
      }
      const jsonData = await response.json();
      setBlogData(jsonData);
      console.log(blogData); // This will show the previous value of blogData, not the updated one.
    } catch (ex) {
      console.log("Error fetching data:", ex);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  const onClickCol = () => {
    console.log("jsdfh hf sdkaf sdkfadf");
    <Link to={"/SinglePost"}></Link>;
  };
  return (
    <>
      <Row className="BlogPage" justify={"space-between"}>
        <Col span={16}>
          <h2 className="LargeHeading">Blog </h2>
          <div className="divider"></div>
          <br></br>

          <Row
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 31,
            }}
            justify={"space-between"}
          >
            {blogDataList.map((e) => (
              <Col
                className="gutter-row blog "
                span={8}
                style={{ cursor: "pointer" }}
              >
                <Link to={"/SinglePost"}>
                  <img src={e.thumnails} className="Thumnails" />
                  <div className="BlogCard">
                    <div className="category">CATEGORY</div>
                    <h3 className="blogTitle">{e.title}</h3>
                    <p className="subTitle">{e.subtitle}</p>
                    <Row align={"middle"} justify={"space-between"}>
                      <Row align={"middle"} className="metaDiscription">
                        {" "}
                        <div className="circle"> </div> By : {e.author}
                      </Row>
                      <Row align={"middle"} className="metaDiscription">
                        {" "}
                        <div className="circle"> </div> On :{e.date}
                      </Row>
                    </Row>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
          <br></br>
          <br></br>
          <Row justify={"center"}>
            <Pagination defaultCurrent={1} total={blogDataList.length} />
          </Row>
        </Col>

        <Col className="SideBar" span={6}>
          <SidebarSear/>
          <br></br>
          <br></br>
          <br></br>
          <ConnectWithUs/>
          <br></br>
          <Category/>
          <br></br>
          <ContactSection/>
          <br></br>
          <ImportPageList/>
        </Col>
      </Row>
    </>
  );
}
export default BlogPage;
