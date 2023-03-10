import React, { useState } from "react";
import "./ProductComponent.css";
import { useParams } from "react-router-dom";
import {
  Icon,
  Button,
  Reveal,
  Image,
  Dropdown,
  Header,
} from "semantic-ui-react";
import cardMockData from "../../Data/cardMockData";
import Footer from "../Footer/Footer";
import { useDispatch } from "react-redux";
import { addWish } from "../../redux/wishList-reducer";
import TryMock from "../../Data/TryMock";
import { useSelector } from "react-redux";
import { addCart } from "../../redux/cart-reducer";

const ProductComponent = () => {
  const [btn, setBtn] = useState(true);
  const dispatch = useDispatch();
  const { categoryItem } = useSelector((state) => state.category.data);
  const { wishListItem } = useSelector((state) => state.wishList.data);
  const { genderItem } = useSelector((state) => state.genderData.data);
  console.log("from redux==================>", categoryItem);
  const { id } = useParams();
  console.log("dataItem===>", TryMock);
  console.log("dataItem===>", genderItem[id]);
  const { name, img, category, price, offPrice, percentOff, imgMove } =
    genderItem[categoryItem].data[id];

  const AddWishFn = () => dispatch(addWish(genderItem[categoryItem].data[id]));

  return (
    <>
      <h2>Your's Product</h2>
      <div className="product-component-main">
        <div className="product-profile">
          <Reveal animated="move right">
            <Reveal.Content visible>
              <Image src={img} />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Image src={imgMove} />
            </Reveal.Content>
          </Reveal>
        </div>
        <div className="product-desc">
          <h2>{name}</h2>
          <p>{category}</p>
          <hr />
          <h3>
            <Icon name="rupee sign" />
            {offPrice}
            <strike style={{ color: "grey" }}>
              <Icon name="rupee sign" />
              {price}
            </strike>
          </h3>
          <span style={{ color: "red", marginLeft: "9px" }}>
            {percentOff} OFF
          </span>

          <div className="size-main">
            <h4>Please select a size.</h4>
            <ul>
              <li>XS</li>
              <li>M</li>
              <li>L</li>
              <li>XL</li>
              <li>XXL</li>
            </ul>
          </div>
          <p>Quantity</p>

          <div>
            <Button
              positive
              onClick={() => {
                dispatch(addCart(genderItem[categoryItem].data[id]));
              }}
            >
              <Icon name="add to cart" /> ADD TO CART
            </Button>
            <Button
              basic
              color="red"
              onClick={() => {
                AddWishFn();
              }}
            >
              <Icon name="heart" />
              ADD TO WISHLIST
            </Button>
          </div>
          <hr />
          {/* ------------------------------------------------ ADD Dropdown here for product details/ description  */}
          <div className="product-details-details"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductComponent;
