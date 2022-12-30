import React, { useState } from "react";
import { Input, Menu, Segment, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [activeItem, setActiveItem] = useState("WOMEN");
  const [itemSearch, setItemSearch] = useState("");
  console.log(itemSearch);
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
              <Menu.Item 
              name="Contactus" 
              active={activeItem==="Contactus"}
              onClick={categoryFunc}
              as={Link}
              to="/Contactus"
              />
                
                {/* <p href="">Contact Us</p> */}

              <Menu.Item>
                <p href="">
                  <Icon name="user" circular color="black" size="large" />
                </p>
              </Menu.Item>
              {/* -------------------------------------------- sample btn  */}
              <Menu.Item
              name="datasub"
              as={Link}
              to="/subcategories"
            />
              {/* ---------------------------------------------------------  */}
              <Menu.Item>
                <Input
                  icon="search"
                  placeholder="Search..."
                  onChange={(e) => {
                    setItemSearch(e.target.value);
                  }}
                />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </div>
        <div>
        </div>
      </div>
    </>
  );
};

export default Header;
