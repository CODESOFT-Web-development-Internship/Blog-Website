import { Col, Row, Input, Select, message, Upload, Button } from "antd";
import "./NewPostStyle.css";
import { InboxOutlined, PoweroffOutlined } from "@ant-design/icons";
import { useState } from "react";
const { TextArea } = Input;

const options = [];
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const { Dragger } = Upload;

function NewPost() {
  const [loadings, setLoadings] = useState([]);
  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

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
          <TextArea className="" rows={4} showCount maxLength={400} />
          <br></br>
          <br></br>
          <br></br>
          <Select
            mode="multiple"
            allowClear
            style={{
              width: "100%",
            }}
            placeholder="Please select"
            defaultValue={["a10", "c12"]}
            onChange={handleChange}
            options={options}
          />
          <br></br>
          <br></br>
          <br></br>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from
              uploading company data or other banned files.
            </p>
          </Dragger>
          <br></br>
          <br></br>
          <br></br>
          <Row align={"middle"} justify={"center"}>
            {" "}
            <Button
              type="primary"
              className="postBtn"
              icon={<PoweroffOutlined />}
              loading={loadings[1]}
              onClick={() => enterLoading(1)}
            >
              Click me!
            </Button>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default NewPost;
