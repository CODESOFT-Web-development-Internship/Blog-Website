import "./SearchStyle.css";
import { Input, Row, Button, Image } from "antd";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import logo from "../../../images/logo.png";
const { Search } = Input;
const onSearch = (value) => console.log(value);
function SearchHeader() {
  return (
    <>
      <Row className="HeaderBox" justify={"center"} align={"middle"}>
        <img src={logo} width={200} />
        <Row align={"middle"} className="SearchBox">
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
      </Row>
    </>
  );
}

export default SearchHeader;
