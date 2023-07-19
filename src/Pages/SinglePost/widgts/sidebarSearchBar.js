
import { Input, Row, Button, Image } from "antd";
import React from "react";
import "./sidewiedget.css";
import { SearchOutlined } from "@ant-design/icons";
const { Search } = Input;
const onSearch = (value) => console.log(value);
function SidebarSear() {
  return (
    <>
      <Row align={"middle"} className="SideSearchBox">
        <input
          className="search"
          type="search"
          placeholder="Search here"
          onChange={onSearch}
        />
        <Button
          type="primary"
          icon={<SearchOutlined />}
          className="SearchBtn"
        />
      </Row>
    </>
  );
}

export default SidebarSear;
