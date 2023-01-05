import React from "react";
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

const ProductComponent = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log("try mock here...", TryMock.category[id].data[id]);
  const { name, img, category, price, offPrice, percentOff } =
    TryMock.category[id].data[id];

  const options = [
    {
      key: "medium",
      text: "medium",
      value: "medium",
      content: "medium",
    },
    {
      key: "small",
      text: "small",
      value: "small",
      content: "small",
    },
    {
      key: "large",
      text: "large",
      value: "large",
      content: "large",
    },
  ];

  return (
    <>
      <h2>Your's Product</h2>
      <div className="product-component-main">
        <div className="product-profile">
          <Reveal animated="move">
            <Reveal.Content visible>
              <Image src={img} />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Image src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1661773633_3657738.jpg?format=webp&w=576&dpr=1.0" />
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
            <strike>
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
            <Button positive>
              <Icon name="add to cart" /> ADD TO CART
            </Button>
            <Button basic color="red">
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
