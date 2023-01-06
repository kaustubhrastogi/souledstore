import React from "react";
import cardMockData from "../../Data/cardMockData";
import "./cart.css";
import { Button, Icon, Input } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/cart-reducer";

const CartComponent = () => {
  const { cartItem } = useSelector((state) => state.cart.data);
  // const totalAmount= useSelector((state)=>state.cart.data)
  // console.log('totalSum=>',totalSum)
  // console.log('totalAmount=>',totalAmount)
  const dispatch = useDispatch();
  console.log("cartItem=>", cartItem);
  const addCart = () => {
    console.log("buy it");
  };
  // console.log("cardmock in cart", cardMockData[0].name);
  return (
    <>
      <div className="cart-main">
        <div className="cart-main-prim">
          {cartItem && Object.keys(cartItem).length > 0 ? (
            Object.keys(cartItem).map((curr, index) => (
              <div className="cart-product-main">
                <div className="cart-product-main-img">
                  <img src={cartItem[curr].img} alt="" />
                  <div className="cart-product-main-product-desc">
                    <div className="cart-product-main-product-desc-sec">
                      <h3>{cartItem[curr].name}</h3>
                      <h3>{cartItem[curr].category}</h3>
                    </div>
                    <div className="cart-product-main-product-price">
                      <p>
                        <Icon name="rupee" /> {cartItem[curr].price}
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
                      <button onClick={() => dispatch(removeFromCart(index))}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            ))
          ) : (
            <h2>No Data Found</h2>
          )}
        </div>
        <div>
          {Object.keys(cartItem).length > 0 && (
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
                <p>{Object.keys(cartItem).length}</p>
                <p>Discount</p>
                <p>GST</p>
                <p>Total Amount</p>
                <p>{}</p>
                <p>Cart Total</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartComponent;
