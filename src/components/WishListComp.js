import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "../redux/cart-reducer";
import { removeWishListItem } from "../redux/wishList-reducer";
import SubCategoryCard from "./SubCategoryProducts/SubCategoryCard";
import { Button, Icon } from "semantic-ui-react";

export const WishListComp = () => {
  const dispatch = useDispatch();
  const { wishListItem } = useSelector((state) => state.wishList.data);
  console.log("wishListItem", wishListItem);
  return (
    <div className="subcategory-main">
      {wishListItem && wishListItem.length > 0 ? (
        wishListItem.map((i, index) => (
          <div style={{ width: "58%", margin: "9px" }}>
            <SubCategoryCard
              index={index}
              id={i.id}
              img={i.img}
              name={i.name}
              category={i.category}
              price={i.price}
              offPrice={i.offPrice}
            />
            <Button
              style={{ margin: "2px" }}
              size="small"
              color="facebook"
              onClick={() => dispatch(addCart(i))}
            >
              Move to Cart
            </Button>
            <Button
              size="small"
              color="black"
              onClick={() => dispatch(removeWishListItem(i.id))}
            >
              <Icon name="trash alternate" /> Remove
            </Button>
          </div>
        ))
      ) : (
        <h1>Wish List is Empty</h1>
      )}
    </div>
  );
};
