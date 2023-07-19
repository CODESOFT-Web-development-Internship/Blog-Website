import { Col, Row, Input, Select, message, Upload, Button } from "antd";
import "./NewPostStyle.css";
import { SaveOutlined } from "@ant-design/icons";
import { useState } from "react";
const { TextArea } = Input;

const options = [
  {
    label: "AI",
    value: "Ai",
  },
  {
    label: "Blog",
    value: "Blog",
  },
  {
    label: "Tech news",
    value: "Tech news",
  },
  {
    label: "Trandings",
    value: "Trandings",
  },
];
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const { Dragger } = Upload;

function NewPost() {
  const [loadings, setLoadings] = useState([]);
  const [file, setFile] = useState();

  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  function handleFileSelect(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
    console.log(e.target.files);
  }

  return (
    <>
      <Row className="mainBox" justify={"center"} align={"middle"}>
        <Col className="box">
          <h2 className="LargeHeading">New Post </h2>
          <div className="divider"></div>
          <br></br>
          <br></br>
          <input className="PostTitle" type="text" placeholder="Enter Title" />
          <br></br>
          <br></br>
          <br></br>
          <TextArea
            className=""
            rows={4}
            showCount
            maxLength={400}
            placeholder="Write here. . . "
          />
          <br></br>
          <br></br>
          <br></br>
          <Select
            mode="multiple"
            allowClear
            style={{
              width: "100%",
            }}
            placeholder="Category Select"
            // defaultValue={["a10", "c12"]}
            onChange={handleChange}
            options={options}
          />
          <br></br>
          <br></br>
          <br></br>
          <input
            className="UploadButton"
            type="file"
            accept=".jpg, .png, image/jpeg, image/png"
            required
            onChange={handleFileSelect}
          />
          <Row justify={"center"}>
            {file == null ? (
             
                <div className="UploadCoverImage">Upload image</div>
            
            ) : (
              <img src={file} className="UploadCoverImage" />
            )}
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row align={"middle"} justify={"center"}>
            <Button
              type="primary"
              className="postBtn"
              icon={<SaveOutlined />}
              loading={loadings[1]}
              onClick={() => enterLoading(1)}
            >
              Public
            </Button>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default NewPost;
