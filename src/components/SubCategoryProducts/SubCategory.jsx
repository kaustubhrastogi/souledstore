import React, { useState, useEffect } from "react";
import cardMockData from "../../Data/cardMockData";
import SubCategoryCard from "./SubCategoryCard";
import "./SubCategory.css";
import { Input } from "semantic-ui-react";
import { useParams, Link } from "react-router-dom";
import TryMock from "../../Data/TryMock";

const SubCategory = () => {
  const { id } = useParams();
  console.log('TryMock is......',TryMock.category)
  // console.log('TryMock is',TryMock.category[id].cardOneHead ,TryMock.category[id].data[id])
  const { index } = useParams();
  // console.log('trymock...index', index);
  // console.log(`TryMock.category[${index}].cardOneHead`);
  const [mockSample, setMockSample] = useState([]);
  const [searchText, setSearchText] = useState("");
  // console.log('route index',index)
  // console.log("mocksample", mockSample);
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
  // ----------------------------------

  useEffect(() => {
    setMockSample(TryMock.category[id].data);
  }, []);
  return (
    <>
    <h5><h2>{TryMock.category[id].cardOneHead}</h2> Collection -{filteredProducts.length} items</h5>
      <div className="subcategory-main-container">
        {/* ------------------------------------------------ Aside div for filter options  */}
        <div className="aside">
          <div className="filter-div">
            <label htmlFor="">Filter</label>
            <select
              name=""
              id=""
              onChange={(e) => {
                console.log("val", e.target.value);
              }}
            >
              <option value="popular">Popular</option>
              <option value="ascending">Price(Low To High)</option>
              <option value="descending">Price(High To Low)</option>
            </select>
          </div>
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
        </div>

        {/* -------------------------------------------- Getting Products before and after search  */}
        {searchText ? (
          <div className="subcategory-main">
            {filteredProducts.map((i, index) => (
              <SubCategoryCard
                index={index}
                id={i.id}
                img={i.img}
                name={i.name}
                category={i.category}
                price={i.price}
                offPrice={i.offPrice}
              />
            ))}
          </div>
        ) : (
          <div className="subcategory-main">
            {mockSample.map((i, index) => (
              <SubCategoryCard
                index={index}
                id={i.id}
                img={i.img}
                name={i.name}
                category={i.category}
                price={i.price}
                offPrice={i.offPrice}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SubCategory;
