import React from "react";
import cardMockData from "../../Data/cardMockData";
import "./cart.css";
import { Button, Icon, Input } from "semantic-ui-react";

const CartComponent = () => {
  const addCart = () => {
    console.log("buy it");
  };
  console.log("cardmock in cart", cardMockData[0].name);
  return (
    <>
      <div className="cart-main">
        <div className="cart-product-main">
          <div className="cart-product-main-img">
            <img src={cardMockData[0].img} alt="" />
            <div className="cart-product-main-product-desc">
              <div className="cart-product-main-product-desc-sec">
                <h3>{cardMockData[0].name}</h3>
                <h3>{cardMockData[0].category}</h3>
              </div>
              <div className="cart-product-main-product-price">
                <p>
                  <Icon name="rupee" /> {cardMockData[0].price}
                </p>
              </div>
              <div>
                <p>
                  Quantity:
                  <span>
                    <button>-</button>
                    <span>0</span> <button>+</button>
                  </span>
                </p>
                <button>Remove</button>
              </div>
            </div>
          </div>
          <hr />
          <div className="cart-product-main-img">
            <img src={cardMockData[0].img} alt="" />
            <div className="cart-product-main-product-desc">
              <div className="cart-product-main-product-desc-sec">
                <h3>{cardMockData[0].name}</h3>
                <h3>{cardMockData[0].category}</h3>
              </div>
              <div className="cart-product-main-product-price">
                <h5>
                  <Icon name="rupee" /> {cardMockData[0].price}
                </h5>
              </div>
              <div>
                <p>
                  <span>
                    <button>-</button>
                    <span>0</span> <button>+</button>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-product-order">
          <Button color="primary" animated="vertical" onClick={addCart()}>
            <Button.Content hidden>
              ADD TO CART <Icon name="cart plus" size="large" />
            </Button.Content>
            <Button.Content c visible>
              ADD TO CART
            </Button.Content>
          </Button>
          <Input
            size="mini"
            icon="tags"
            iconPosition="left"
            label={{ tag: true, color: "orange", content: "Add Coupon" }}
            labelPosition="right"
            placeholder="Enter tags"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <div className="billing-details">
            <h6>BILLING DETAILS</h6>
            <p>Cart Total</p>
            <p>Discount</p>
            <p>GST</p>
            <p>Total Amount</p>
            <p>Cart Total</p>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default CartComponent;
