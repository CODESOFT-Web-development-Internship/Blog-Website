import { Row, Tabs, Col } from "antd";
import React, { useEffect, useState } from "react";
import "./ProfileStyle.css";
import { Avatar, Button, List, Skeleton } from "antd";
import pic from "../../assets/blog/blog15.jpg";
import { tab } from "@testing-library/user-event/dist/tab";
import Title from "antd/es/skeleton/Title";
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
function Profile() {
  const [initLoading, setInitLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);

  const onLoadMore =     () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        }))
      )
    );
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res.results);
        setData(newData);
        setList(newData);
        setLoading(false);
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event("resize"));
      });
  };
  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;

  const [blogData, setBlogData] = useState([]);
  const fetchBlog = async () => {
    try {
      const response = await fetch(
        "https://localhost:7084/api/Post/GetAllPost"
      );
      if (!response.ok) {
        console.log("Network response was not ok");
      }
      const jsonData = await response.json();
      setBlogData(jsonData);
      console.log(blogData);
    } catch (ex) {
      console.log("Error fetching data:", ex);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);
  return (
    <>
      <Row justify={"center"} className="profilepicBox">
        <img src={pic} width={150} height={150} className="profilePic" />
      </Row>
      <Row justify={"center"}>
        <h3 className="ProfileName">Nitish kumar</h3>
      </Row>
      <br></br>
      <br></br>

      <Row justify={"center"}>
        <Col>
          <h2 className="LargeHeading">Your All Posts </h2>
          <div className="divider"></div>
        </Col>
      </Row>
      <div className="postList">
        {blogData.map((e) => (
          <div>
          
          </div>
        ))}
      </div>
    </>
  );
}
export default Profile;
