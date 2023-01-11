import React, { useEffect, useState } from "react";
import {
  Input,
  Menu,
  Segment,
  Icon,
  Dropdown,
  Button,
} from "semantic-ui-react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import Badge from "react-bootstrap/Badge";
import { useSelector, useDispatch } from "react-redux";
import { getCategory } from "../../redux/categoryReducer";
import SearchComponent from "../SearchComponent/SearchComponent";
import TryMock from "../../Data/TryMock";
import { getGender } from "../../redux/genderDataReducer";
import { logout } from "../../redux/login-reducer";

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
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("Men");
  const [itemSearch, setItemSearch] = useState("");
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const { wishListItem } = useSelector((state) => state.wishList.data);
  const { cartItem } = useSelector((state) => state.cart.data);
  const userdata = useSelector((state) => state.login.data);
  // let userdetails = JSON.parse(userdata)
  // console.log("userdata====>",(userdata.loginData.name))
  // console.log("name====>",userdata.loginData.name)
  // console.log(itemSearch);
  const categoryFunc = (e, { name }) => {
    setActiveItem(name);
    if (name == "WOMEN") {
      dispatch(getGender(TryMock.WOMEN));
    } else if (name == "MEN") {
      dispatch(getGender(TryMock.MEN));
    } else {
      dispatch(TryMock.category);
    }

    // dispatch(getGender(name))
  };
  // console.log(activeItem);
  return (
    <>
      <div className="header-main">
        <div className="header-main-prim">
          <Menu pointing>
            <Menu.Item as={Link} to="/Men">
              <p to="/Men" className="logo-head">
                <p>Soul</p>
                <p>Fabric</p>
              </p>
            </Menu.Item>

            <Link style={{ marginTop: "0px" }} to="/Men">
              <Menu.Item
                style={{ minHeight: "13.5vh" }}
                name="MEN"
                active={activeItem === "MEN"}
                onClick={categoryFunc}
              />
            </Link>
            <Link style={{ marginTop: "0px" }} to="/Women">
              <Menu.Item
                style={{ minHeight: "13.5vh" }}
                name="WOMEN"
                active={activeItem === "WOMEN"}
                onClick={categoryFunc}
              />
            </Link>
            <Link style={{ marginTop: "0px" }} to="/Child">
              <Menu.Item
                style={{ minHeight: "13.5vh" }}
                name="CHILD"
                active={activeItem === "CHILD"}
                onClick={categoryFunc}
              />
            </Link>
            <Menu.Menu position="right">
              <Menu.Item name="WishListComp" as={Link} to="/Contactus">
                <p href="">
                  <Icon name="user circle" size="big" />
                  <p>{userdata.loginData.name}</p>
                  {userdata.loginData.name ? (
                    <Button
                      size="mini"
                      secondary
                      onClick={() => dispatch(logout())}
                    >
                      logout
                    </Button>
                  ) : null}
                </p>
              </Menu.Item>
              <Menu.Item name="WishListComp" as={Link} to="/WishListComp">
                <Icon name="heart outline" size="big" />

                <Badge
                  bg="white"
                  className="badgestyle"
                  style={{ color: "black" }}
                >
                  {wishListItem.length}
                </Badge>
              </Menu.Item>

              <Menu.Item as={Link} to="/cart">
                <Icon name="in cart" size="big" />
                <Badge
                  bg="white"
                  className="badgestyle"
                  style={{ color: "black" }}
                >
                  {Object.keys(cartItem).length}
                </Badge>
              </Menu.Item>
              <p className="search-comp">
                <SearchComponent />
              </p>
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
