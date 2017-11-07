import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
 CardSubtitle, CardBody } from 'reactstrap';
 import { Parallax } from 'react-parallax';

const RecipeEntry_Test = (props) => {
  // Create new image link with higher resolution
  var imgLink = props.data.imageUrlsBySize["90"];
  var imgSizePropertyIndex = imgLink.indexOf("=s90-c");
  imgLink = imgLink.slice(0, imgSizePropertyIndex) + "=s1080-c";
  
  // Limit title to 25 characters
  if (props.data.recipeName.length > 32) {
    var title = props.data.recipeName.slice(0, 32) + "...";
  } else {
    title = props.data.recipeName;
  }
  
  var ingredientsArray = [];
  for (var n = 0; n < props.data.ingredients.length; n++) {
    if (props.data.ingredients[n].length > 32) {
      ingredientsArray.push(props.data.ingredients[n].slice(0, 32) + "...");
    } else {
      ingredientsArray.push(props.data.ingredients[n]);
    }
  }
  return (
    <div className="recipe-entry" id={props.id}>
      <CardGroup>
        <Card>
          <Parallax className="recipe-image img-hover" bgImage={imgLink} strength={100}></Parallax>
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardText>{ingredientsArray.map((element, index) => {
              if (index < 3) {
                return <li>{element}</li>
              }
            })}</CardText>
            <Button>Favorite</Button>
          </CardBody>
        </Card>
      </CardGroup>
    </div>);
}

export default RecipeEntry_Test;
