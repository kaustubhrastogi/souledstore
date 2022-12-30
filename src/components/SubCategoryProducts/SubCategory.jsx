import React, { useState, useEffect } from "react";
import cardMockData from "../../Data/cardMockData";
import SubCategoryCard from "./SubCategoryCard";
import "./SubCategory.css";
import { Input } from "semantic-ui-react";

const SubCategory = () => {
  const [mockSample, setMockSample] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log("mocksample", mockSample);

  function searchProduct(e) {
    console.log(e.target.value);
  }
  // ---------------------------------------------------- For Filter products after search
  const filteredBooks = mockSample.filter(
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
    setMockSample(cardMockData);
  }, []);
  return (
    <>
      <p>Mens-T-Shirts-{mockSample.length} items</p>
      <div className="subcategory-main-container">
        {/* ------------------------------------------------ Aside div for filter options  */}
        <div className="aside">
          <div className="filter-div">
            <label htmlFor="">Filter</label>
            <select name="" id="">
              <option value="">Popular</option>
              <option value="">Price(Low To High)</option>
              <option value="">Price(High To Low)</option>
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
          {/* ----------------------------------------------------------------- */}
        </div>
        <div className="subcategory-main">
          {mockSample.map((i, index) => (
            <SubCategoryCard
              key={index}
              id={i.id}
              img={i.img}
              name={i.name}
              category={i.category}
              price={i.price}
              offPrice={i.offPrice}
            />
          ))}
        </div>
      </div>
      {/* -------------------------------------------- Getting Products after search  */}
      <div>
        <ul>
          {filteredBooks.map(({ name, category, img }) => (
            <div key={category}>
              <strong>{name}</strong>
              <br />
              <img src={img} alt="" />
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SubCategory;