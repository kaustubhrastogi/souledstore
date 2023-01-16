import React, { useEffect } from "react";
import "./AgeCategory.css";
import { Link, useParams } from "react-router-dom";
import WomenMenChildCollection from "../../Data/WomenMenChildCollectionCard";
import Footer from "../Footer/Footer";
import CarouselComp from "../CarouselComp";
// import { getGender,  WomenData } from "../../redux/categoryReducer";
import { getGender } from "../../redux/genderDataReducer";
import { useDispatch } from "react-redux";
import TryMock from "../../Data/TryMock";
import { getCategory } from "../../redux/categoryReducer";

const Women = () => {
  const womenCollection = WomenMenChildCollection.gender.women;
  const dispatch = useDispatch();

  return (
    <>
      <CarouselComp gender="women" />
      {/* ------------------------------------------------- COLLECTION CARD  */}
      <div className="collection-main-container">
        <div className="headings">
          <h2>WOMEN IN FASHION</h2>
        </div>
        <h1>COLLECTIONS</h1>
        <div className="collection-cards">
          {womenCollection.map((i, index, name) => {
            {
              {/* console.log("womenCollection", womenCollection); */}
            }
            return (
              <div
                className="collection-card-prim"
                onClick={() => dispatch(getCategory(index))}
              >
                <div className="collection-card-prim-women">
                  <Link to={`/subcategory/${index}`}>
                    <img key="{item}" src={i.img} alt="" />
                  </Link>
                  <p>{i.cardOneHead}</p>
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
          {womenCollection.map((i) => {
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

export default Women;
