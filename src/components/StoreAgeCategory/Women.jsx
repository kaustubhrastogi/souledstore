import React from "react";
import "./AgeCategory.css";
import { Grid, Segment } from "semantic-ui-react";
import WomenCollectionCardData from "../../Data/WomenCollectionCard";

import { Button, Card, Image, Container, Icon } from "semantic-ui-react";
import CarouselComp from "../CarouselComp";

const Women = () => {
  let gett = WomenCollectionCardData;
  console.log(gett);
  return (
    
    <>
      <div>
        <div className="slide-container">
        <img
            src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-banner_22_1qB155u.jpg?format=webp&w=1366&dpr=1.0"
            alt="" 
          />
        </div>
      </div>
      {/* ------------------------------------------------- COLLECTION CARD  */}
      <div className="collection-main-container">
        <h1>COLLECTIONS</h1>
        <div className="collection-cards">
          {WomenCollectionCardData.map((i) => {
            return (
              <div className="collection-card-prim">
                <div>
                  <img src={i.img} alt="" />
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
      {/* --------------------------------------------------------- CATEGORIES GRID  */}

      <div className="categories-grid"></div>
    </>
  );
};

export default Women;
