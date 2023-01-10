import React, { useEffect, useState } from "react";
import cardMockData from "../../Data/cardMockData";
import "./cart.css";
import { Button, Icon, Input } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, removeFromCart } from "../../redux/cart-reducer";

const CartComponent = () => {
  // const [count,setCount]=useState(1)
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
      sum = cartItem[c].price + sum;
    });
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
                  <div style={{textAlign:'left', marginLeft:'39px'}} className="cart-product-main-product-desc">
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
                          <Button size="mini"  onClick={()=>{dispatch(decrement(cartItem[curr].id))}}> <Icon name="minus" /> </Button>
                          <span>{cartItem[curr].count}</span>
                          <Button size="mini" onClick={()=>{dispatch(increment(cartItem[curr].id))}}><Icon name="plus" /></Button>
                        </span>
                      </p>
                      <Button color="black" onClick={() => dispatch(removeFromCart(index))}>
                         <Icon name="trash alternate" /> Remove
                      </Button>
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
          {
            <div className="cart-product-order">
              <Button positive animated="vertical">
                <Button.Content hidden>
                  PLACE ORDER <Icon name="cart plus" size="large" />
                </Button.Content>
                <Button.Content c visible>
                  PLACE ORDER
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
              <div>
              <h6 style={{marginTop:'24px', marginBottom:'0'}}>BILLING DETAILS</h6>
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
                <p>{SumTotal()}</p>
                </div>
                <p>Cart Total</p>
              </div>
              </div>
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default CartComponent;
