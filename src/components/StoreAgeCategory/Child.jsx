import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import Footer from "../Footer/Footer";

const Child = () => {
  return (
    <>
      <div>
        <div>
          <div className="slide-container">
            <img
              src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepagebanner11.jpg?format=webp&w=1366&dpr=1.0"
              alt=""
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Child;
