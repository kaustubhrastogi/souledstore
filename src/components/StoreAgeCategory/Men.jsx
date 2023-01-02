import React from "react";
import { Button, Card, Image } from 'semantic-ui-react'
import Footer from "../Footer/Footer";
import Carousel from 'react-bootstrap/Carousel';
import WomenCollectionCardData from "../../Data/WomenCollectionCard";
import CarouselComp from "../CarouselComp";


const Men = () => {
  return (
    <>
    <div>
      <CarouselComp />
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
      <Footer/>
    </div>
    </>
  );
};

export default Men;
