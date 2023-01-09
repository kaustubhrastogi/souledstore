import React, { useState, useEffect } from "react";
import SubCategoryCard from "./SubCategoryCard";
import "./SubCategory.css";
import { Button, Icon, Input } from "semantic-ui-react";
import { HeartComp } from "./HeartComp";
import { useParams } from "react-router-dom";
import TryMock from "../../Data/TryMock";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../redux/cart-reducer";

const SubCategory = () => {
  const NewwomenCollection = TryMock;
  console.log("NewwomenCollection", NewwomenCollection.women);
  const { id } = useParams();
  console.log("route is ============>", id);
  console.log("TryMock is......", TryMock[id]);
  console.log("TryMock is......", TryMock.category);
  const dispatch = useDispatch();
  // console.log('TryMock is',TryMock.category[id].cardOneHead ,TryMock.category[id].data[id])
  const { index } = useParams();
  const [mockSample, setMockSample] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [priceRange, setPriceRange] = useState("popular");
  const categoryHeading = TryMock.category[id].cardOneHead;
  // ----------------------------------------- Function For Filter products after search
  const filteredProducts = mockSample.filter(
    ({ name, category }) =>
      name.toLowerCase().includes(searchText.toLowerCase()) ||
      category.toLowerCase().includes(searchText.toLowerCase())
  );

  function searchProduct(e) {
    console.log(e.target.value);
    setSearchText(e.target.value);
  }
  // -------------------------- Soring Products with Price-range
  if (priceRange == "ascending") {
    mockSample.sort((a, b) => (a.offPrice > b.offPrice ? 1 : -1));
  } else if (priceRange == "descending") {
    mockSample.sort((a, b) => (a.offPrice > b.offPrice ? -1 : 1));
  }
  console.log("newv", mockSample);
  // ---------------------------------------------------------
  useEffect(() => {
    setMockSample(TryMock.category[id].data);
  }, []);
  return (
    <>
      <h5 className="subcat-head">
        <h2>{categoryHeading}</h2> Collection -{filteredProducts.length} items
      </h5>
      <div className="subcategory-main-container">
        {/* ------------------------------------------------ Aside div for filter options  */}
        <div className="aside">
          {/* ------------------------------------------------------ Product Input Search  */}
          <div className="subcategory-search">
            <Input
              focus
              placeholder="Search Product"
              onChange={(e) => {
                searchProduct(e);
              }}
            />
          </div>
          {/* ---------------------------------------- Sort By - */}
          <div className="filter-div">
            <label htmlFor="">SORT</label>
            <select
              name=""
              id=""
              onChange={(e) => {
                setPriceRange(e.target.value);
              }}
            >
              <option value="popular">Popular</option>
              <option value="ascending">Price - Low To High</option>
              <option value="descending">Price - High To Low</option>
            </select>
          </div>
        </div>

        {/* -------------------------------------------- Getting Products before and after search  */}
        {searchText ? (
          <div className="subcategory-main-filter">
            {filteredProducts.map((i, index) => (
              <>
                <SubCategoryCard
                  index={index}
                  id={i.id}
                  img={i.img}
                  name={i.name}
                  category={i.category}
                  price={i.price}
                  offPrice={i.offPrice}
                />
                <div className="wishlist-icon-filter">
                  <HeartComp index={index} mockSample={i} id={i.id} />
                </div>
                <div>
                  <Button
                    color="facebook"
                    style={{ width: "88%", marginLeft: 5 }}
                    onClick={() => {
                      dispatch(addCart(i));
                      // dispatch(totalAmount(i.price))
                    }}
                  >
                    <Icon name="add to cart-filter" />
                    Add to Cart
                  </Button>
                </div>
              </>
            ))}
          </div>
        ) : (
          <div className="subcategory-main">
            {mockSample.map((i, index) => (
              <div style={{ border: "none" }} className="card">
                <SubCategoryCard
                  index={index}
                  id={i.id}
                  img={i.img}
                  name={i.name}
                  category={i.category}
                  price={i.price}
                  offPrice={i.offPrice}
                />

                <div className="wishlist-icon">
                  <HeartComp index={index} mockSample={i} id={i.id} />
                </div>
                <div>
                  <Button
                    color="facebook"
                    style={{ width: "88%", marginLeft: 5 }}
                    onClick={() => {
                      dispatch(addCart(i));
                      // dispatch(totalAmount(i.price))
                    }}
                  >
                    <Icon name="add to cart" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SubCategory;
