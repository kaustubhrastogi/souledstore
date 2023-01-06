import React from "react";
import { Card, Icon, Image, Button, Rating } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./SubCategory.css";

const SubCategoryCard = ({
  id,
  index,
  img,
  name,
  category,
  price,
  offPrice,
}) => {
  console.log("category",category);
  return (
    <>
      <div className="subcategory-main-container">
        <div className="card-main">
          <Card as={Link} to={`/ProductComponent/${index}`}>
            <Image src={img} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{name}</Card.Header>
              <hr />
              <Card.Meta>
                <span>{category}</span>
                {/* ---------------------------------------------- get ratings from mock data */}
                <span>
                  <Rating defaultRating={3} maxRating={5} disabled />
                </span>
              </Card.Meta>
            </Card.Content>

            <Card.Description>
              <Icon name="rupee" />
              {offPrice}
              <span style={{ color: "grey" }}>
                <strike color="blue">
                  <Icon name="rupee" />
                  {price}
                </strike>
              </span>
            </Card.Description>
            <Button color="facebook">
              <Icon
                name="add to cart"
                as={Link}
                to={`/ProductComponent/${index}`}
              />
              Buy
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SubCategoryCard;
