import { Row, Tabs ,Col } from "antd";
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
  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);
  const onLoadMore = () => {
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
          <h2 className="LargeHeading" >Your All Posts </h2>
          <div className="divider"></div>
        </Col>
      </Row>
      <div className="postList">
        <List
          className="demo-loadmore-list"
          loading={initLoading}
          itemLayout="horizontal"
          loadMore={loadMore}
          dataSource={list}
          renderItem={(item) => (
            <List.Item
              actions={[
                  <a key="list-loadmore-more">View</a>,
                <a key="list-loadmore-edit">Edit</a>,
                <a key="list-loadmore-more">Delete</a>,
              ]}
            >
              <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                  avatar={<Avatar src={item.picture.large} />}
                  title={<a href="https://ant.design">{item.name?.last}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                <div className="circle"></div>
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    </>
  );
}
export default Profile;
