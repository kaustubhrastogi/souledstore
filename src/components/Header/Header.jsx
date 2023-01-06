import React, { useEffect, useState } from "react";
import { Input, Menu, Segment, Icon, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Header.css";
import Badge from "react-bootstrap/Badge";
import { useSelector } from "react-redux";

const linkuri = [
  {
    uri: "",
    name: "Serch",
    value: "search",
  },
  {
    uri: "",
    name: "User",
    value: "user",
  },
  {
    uri: "",
    name: "Whilist",
    value: "heart",
  },
  {
    uri: "",
    name: "Cart",
    value: "cart",
  },
];
const Header = () => {
  const [activeItem, setActiveItem] = useState("Men");
  const [itemSearch, setItemSearch] = useState("");
  const [username, setUsername] = useState("");
  // useEffect(()=>{
  //   let olddata = localStorage.getItem('datainput')
  //   let oldArr = JSON.parse(olddata)
  //   const user=oldArr
  //   setUsername(user.email)
  //  console.log(username)
  // },[])

  const { wishListItem } = useSelector((state) => state.wishList.data);

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
            <p className="logo-head">
              <p>Soul</p>
              <p>Fabric</p>
            </p>
            <Menu.Item
              name="MEN"
              active={activeItem === "MEN"}
              onClick={categoryFunc}
              as={Link}
              to="/Men"
            />
            <Menu.Item
              name="WOMEN"
              active={activeItem === "WOMEN"}
              onClick={categoryFunc}
              as={Link}
              to="/Women"
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
                name="Contact Us"
                active={activeItem === "Contactus"}
                onClick={categoryFunc}
                as={Link}
                to="/Contactus"
              />
              <Menu.Item name="WishListComp" as={Link} to="/WishListComp">
                <p href="">
                  <Icon name="user" circular color="black" size="large" />
                  {username}
                </p>
              </Menu.Item>
              <Menu.Item name="WishListComp" as={Link} to="/WishListComp">
                <p href="">
                  <Icon name="heart" circular color="black" size="large" />

                  <Badge className="badgestyle" style={{ color: "black" }}>
                    {wishListItem.length}
                  </Badge>
                </p>
              </Menu.Item>
              <Menu.Item>
                <Input
                  icon="search"
                  placeholder="Search..."
                  onChange={(e) => {
                    setItemSearch(e.target.value);
                  }}
                />
              </Menu.Item>
              <Menu.Item as={Link} to="/cart">
                <Icon name="in cart" size="big" color="black" />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default Header;

{
  /* <div style={{ width:'100rem'}}>
<Dropdowns/>
</div>
<div style={{ width:'20rem'}}>
<ButtonIcon value={linkuri}/>  </div> */
}
