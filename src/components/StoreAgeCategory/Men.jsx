import React from "react";
import { Button, Card, Image } from 'semantic-ui-react'
import Footer from "../Footer/Footer";
import Carousel from 'react-bootstrap/Carousel';


const Men = () => {
  return (
    <>
    <div>
      <div>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage--Banner--Shirts_JI8v3qP.jpg?format=webp&w=1366&dpr=1.0"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-banner_22_1qB155u.jpg?format=webp&w=1366&dpr=1.0"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage--Banner--Shirts_JI8v3qP.jpg?format=webp&w=1366&dpr=1.0"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        <div className="slide-container">
          <img
            src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage--Banner--Shirts_JI8v3qP.jpg?format=webp&w=1366&dpr=1.0"
            alt=""
          />
        </div>
      </div>
      <Footer/>
    </div>
    </>
  );
};

export default Men;
