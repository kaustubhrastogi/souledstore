import React, { useEffect, useState } from "react";
import cardMockData from "../../Data/cardMockData";
import "./cart.css";
import { Button, Dropdown, Icon, Input } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, removeFromCart } from "../../redux/cart-reducer";

const CartComponent = () => {
  const friendOptions = [
    {
      key: "1",
      text: "Flat50",
      value: "0.5",
    },
    {
      key: "2",
      text: "Flat40",
      value: "0.4",
    },
  ];
  const [off, setOff] = useState();
  console.log("off", off);
  const { cartItem } = useSelector((state) => state.cart.data);
  // const count = useSelector((state)=>state.cart.data)
  // const totalAmount= useSelector((state)=>state.cart.data)
  // console.log('totalSum=>',totalSum)
  // console.log('totalAmount=>',totalAmount)
  const dispatch = useDispatch();
  console.log("cartItem=>", cartItem);

  useEffect(() => {
    SumTotal();
  }, [cartItem]);

  const SumTotal = () => {
    let sum = 0;
    Object.keys(cartItem).map((c) => {
      sum = cartItem[c].price * cartItem[c].count + sum;
      //   {
      //     if(off){
      //     sum= sum - sum*Number(off)
      //     return sum
      //   }
      // }
    });
    // return (sum * 1.18).toFixed(2);
    return sum;
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
                  <div
                    style={{ textAlign: "left", marginLeft: "39px" }}
                    className="cart-product-main-product-desc"
                  >
                    <div className="cart-product-main-product-desc-sec">
                      <h3>{cartItem[curr].name}</h3>
                      <h3>{cartItem[curr].category}</h3>
                    </div>
                    <div className="cart-product-main-product-price">
                      <p>
                        <Icon name="rupee" /> {cartItem[curr].price}
                      </p>
                    </div>
                    <div className="btn-div">
                      <p>
                        <b>Quantity:</b>
                        <span>
                          <Button
                            size="mini"
                            onClick={() => {
                              dispatch(decrement(cartItem[curr].img));
                            }}
                          >
                            {" "}
                            <Icon name="minus" />{" "}
                          </Button>
                          <span>{cartItem[curr].count}</span>
                          <Button
                            size="mini"
                            onClick={() => {
                              dispatch(increment(cartItem[curr].img));
                            }}
                          >
                            <Icon name="plus" />
                          </Button>
                        </span>
                      </p>
                      <Button
                        color="black"
                        onClick={() => dispatch(removeFromCart(cartItem[curr].img))}
                      >
                        <Icon name="trash alternate" /> Remove
                      </Button>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            ))
          ) : (
            <h1 style={{ margin: "0 40%", width: "100%" }}>
              Your Cart Is Empty !
            </h1>
          )}
        </div>
        <div>
          {cartItem && Object.keys(cartItem).length > 0 ? (
            <>
              <div className="cart-product-order">
                <Button positive animated="vertical">
                  <Button.Content hidden>
                    PLACE ORDER <Icon name="cart plus" size="large" />
                  </Button.Content>
                  <Button.Content c visible>
                    PLACE ORDER
                  </Button.Content>
                </Button>
                {/* <Input
                size="mini"
                icon="tags"
                iconPosition="left"
                label={{ tag: true, color: "orange", content: "Add Coupon" }}
                labelPosition="right"
                placeholder="Enter tags"
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              /> */}
                <Dropdown
                  placeholder="Apply Coupon"
                  selection
                  options={friendOptions}
                  onChange={(e, value) => setOff(value.value)}
                />
                <div>
                  <h6 style={{ marginTop: "24px", marginBottom: "0" }}>
                    BILLING DETAILS
                  </h6>
                  <div className="billing-details">
                    <div>
                      <p>Cart Total</p>
                      <p>{Object.keys(cartItem).length}</p>
                    </div>
                    {/* <p>Discount</p> */}
                    <div>
                      <p>GST 18%</p>
                    </div>
                    <div>
                      <p>Total Amount</p>
                      <p>
                        <Icon disabled name="rupee sign" />
                        {SumTotal()}
                      </p>
                      <p>Total Discount</p>
                      <p>
                        <Icon disabled name="rupee sign" />
                        {off ? (Number(off) * SumTotal()).toFixed(2) : 0}
                      </p>
                      <p>Actual Amount</p>
                      <p>
                        <Icon disabled name="rupee sign" />
                        {off
                          ? (SumTotal() - Number(off) * SumTotal()).toFixed(2)
                          : SumTotal()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default CartComponent;
