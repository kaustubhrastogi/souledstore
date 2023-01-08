import React from "react";
import "./AgeCategory.css";
import { Link, useParams } from "react-router-dom";
import WomenMenChildCollection from "../../Data/WomenMenChildCollectionCard";
import Footer from "../Footer/Footer";
import CarouselComp from "../CarouselComp";

const Women = () => {
  const womenCollection = WomenMenChildCollection.gender.women;

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
            {console.log('womenCollection',womenCollection);}
            return (
              <div className="collection-card-prim">
                <div>
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
