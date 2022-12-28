import React, { useState } from "react";
import { Input, Menu, Segment, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Header.css";
import Child from "../StoreAgeCategory/Child";
import Men from "../StoreAgeCategory/Men";
import Women from "../StoreAgeCategory/Women";

const Header = () => {
  const [activeItem, setActiveItem] = useState("WOMEN");
  const categoryFunc = (e, { name }) => {
    setActiveItem(name);
  };
  console.log(activeItem);
  return (
    <>
      <div className="header-main">
        <div className="header-main-prim">
          <Menu pointing>
            <img
              className="appLogo"
              src="https://www.thesouledstore.com/static/img/300x157-twitter.png"
            />
            <Menu.Item
              name="WOMEN"
              active={activeItem === "WOMEN"}
              onClick={categoryFunc}
              as={Link}
              to="/Women"
            />
            <Menu.Item
              name="MEN"
              active={activeItem === "MEN"}
              onClick={categoryFunc}
              as={Link}
              to="/Men"
            />
            <Menu.Item
              name="CHILD"
              active={activeItem === "CHILD"}
              onClick={categoryFunc}
              as={Link}
              to="/Child"
            />
            <Menu.Menu position="right">
              <Menu.Item>
                <p href="">Contact Us</p>
              </Menu.Item>
              <Menu.Item>
                <Input icon="search" placeholder="Search..." />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default Header;
