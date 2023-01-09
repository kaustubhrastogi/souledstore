import React, { useEffect, useState } from "react";
import { Input, Menu, Segment, Icon, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Header.css";
import Badge from "react-bootstrap/Badge";
import { useSelector,useDispatch } from "react-redux";
import { getCategory, getGender } from "../../redux/categoryReducer";

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
  const dispatch = useDispatch();
  // useEffect(()=>{
  //   let olddata = localStorage.getItem('datainput')
  //   let oldArr = JSON.parse(olddata)
  //   const user=oldArr
  //   setUsername(user.email)
  //  console.log(username)
  // },[])

  const { wishListItem } = useSelector((state) => state.wishList.data);
  const {cartItem}= useSelector((state)=>state.cart.data)

  console.log(itemSearch);
  const categoryFunc = (e, { name }) => {
    setActiveItem(name);
    dispatch(getGender(name))
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
              <Menu.Item name="WishListComp" as={Link} to="/Contactus">
                <p href="">
                  <Icon name="user circle" size="big" />
                  {username}
                </p>
              </Menu.Item>
              <Menu.Item name="WishListComp" as={Link} to="/WishListComp">
                <Icon name="heart outline" size="big" />

                <Badge bg="white" className="badgestyle" style={{ color: "black"}}>
                  {wishListItem.length}
                </Badge>
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
                <Icon name="in cart" size="big"  />
                <Badge bg="white" className="badgestyle" style={{ color: "black" }}>
                    {Object.keys(cartItem).length}
                </Badge>
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
