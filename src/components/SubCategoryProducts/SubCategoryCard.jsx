import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import "./SubCategory.css";

const SubCategoryCard = ({ id, img, name, category, price, offPrice }) => {
  console.log({ name });
  return (
    <>
      <div className="subcategory-main-container">
        <div className="card-main">
          <Card>
            <Image src={img} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{name}</Card.Header>
              <hr />
              <Card.Meta>
                <span className="date">{category}</span>
              </Card.Meta>
            </Card.Content>

            <Card.Description>
              <Icon name="rupee" />
              {offPrice}
              <Icon name="rupee" />
              <strike color="blue">{price}</strike>
            </Card.Description>
            <Button color="facebook">
              <Icon name="add to cart" /> Buy
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SubCategoryCard;
