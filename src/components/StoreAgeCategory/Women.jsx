import React from "react";
import "./AgeCategory.css";
import { Grid, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import WomenCollectionCardData from "../../Data/WomenCollectionCard";
import { Button, Card, Image, Container, Icon } from "semantic-ui-react";
import Footer from "../Footer/Footer";
import CarouselComp from "../CarouselComp";

const Women = () => {
  return (
    <>
      <CarouselComp />
      {/* ------------------------------------------------- COLLECTION CARD  */}
      <div className="collection-main-container">
        <div className="headings">
          <h2>MEN IN STYLE</h2>
        </div>
        <h1>COLLECTIONS</h1>
        <div className="collection-cards">
          {WomenCollectionCardData.map((i, index, name) => {
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
          {WomenCollectionCardData.map((i) => {
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
