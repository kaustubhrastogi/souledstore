import React from "react";
import "./Footer.css";
import { Icon } from "semantic-ui-react";

const Footer = () => {
  return (
    <>
      <div className="footer-main">
        <div className="footer-child-one">
          <h1>Our Company</h1>
          <p>
            Street 2023, ABC Drive City: Seaface,
            <br />
            State Full: Maryspace,
            <br />
            Zip Code: 404042
            <br />
            Phone Number: 123-456-1789
          </p>
        </div>
        <div className="footer-child-two">
          <h1>Trending</h1>
          <p>About Us</p>
          <p>Franchise</p>
          <p>Awards & Accolades</p>
          <p>Our Reachs</p>
        </div>
        <div className="footer-child-three">
          <h1>Quick Links</h1>
          <p>About Us</p>
          <p>Franchise</p>
          <p>Awards & Accolades</p>
          <p>Our Reachs</p>
        </div>
        <div className="footer-child-four">
          <h1>Get In Touch</h1>
          <p>
            <Icon name="instagram" size="big" inverted color="purple" />
            <Icon name="facebook f" color="blue" size="big" />
            <Icon name="mail" color="yellow" size="big" />
          </p>
          <p>Awards & Accolades</p>
          <p>Our Reachs</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
