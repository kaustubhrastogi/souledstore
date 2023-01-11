import React, { useEffect } from "react";
import "./AgeCategory.css";
import { Link } from "react-router-dom";
import WomenMenChildCollection from "../../Data/WomenMenChildCollectionCard";
import Footer from "../Footer/Footer";
import CarouselComp from "../CarouselComp";
import TryMock from "../../Data/TryMock";
// ------------------------------------------------
import { getCategory } from "../../redux/categoryReducer";
import { getGender } from "../../redux/genderDataReducer";
import { useDispatch, useSelector } from "react-redux";
// ------------------------------------------------

const Men = () => {
  const dispatch = useDispatch();
  // console.log("=======>", WomenMenChildCollection.gender.men);
  const menCollection = WomenMenChildCollection.gender.men;
  useEffect(()=>{
    dispatch(getGender(TryMock.MEN))
  })
  return (
    <>
      <CarouselComp gender="men" />
      {/* ------------------------------------------------- COLLECTION CARD  */}
      <div className="collection-main-container">
        <div className="headings">
          <h2>MEN IN STYLE</h2>
        </div>
        <h1>COLLECTIONS</h1>
        <div className="collection-cards">
          {menCollection.map((data, index) => {
            return (
              <div
                onClick={() => dispatch(getCategory(index))}
                className="collection-card-prim"
              >
                <div>
                  <Link key={index} to={`/subcategory/${index}`}>
                    <img src={data.img} alt="" />
                  </Link>
                  <p>{data.cardOneHead}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* ------------------------------------------------------ CATEGORIES CARD  */}
      <div className="categories-main-container">
        <h1>CATEGORIES</h1>
        <div className="categories-cards">
          {menCollection.map((i) => {
            return (
              <div className="categories-card-prim">
                <div className="img-container">
                  <img src={i.img2} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* -------------------------------------------------------------------------- */}
      {/* --------------------------------------------------------- CATEGORIES GRID  */}

      <div className="categories-grid"></div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Men;
