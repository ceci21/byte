import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
CardSubtitle, CardBody } from 'reactstrap';
import { Parallax } from 'react-parallax';
import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline';


const RecipeEntry = (props) => {
  // Create new image link with higher resolution
  // var imgLink = props.data.imageUrlsBySize["90"];
  // var imgSizePropertyIndex = imgLink.indexOf("=s90-c");
  // imgLink = imgLink.slice(0, imgSizePropertyIndex) + "=s540-c";

  var imgLink = props.data.image;

  // Limit title to 25 characters
  if (props.data.title.length > 25) {
    var title = props.data.title.slice(0, 25) + "...";
  } else {
    title = props.data.title;
  }

  var ingredientsArray = [];
  if (props.data.hasOwnProperty("usedIngredients")) {
    console.log(props.data.usedIngredients.length)
    for (var n = 0; n < props.data.usedIngredients.length; n++) {
      if (props.data.usedIngredients[n].name.length > 32) {
        ingredientsArray.push(<li>{props.data.usedIngredients[n].name.slice(0, 32) + "..."}</li>);
      } else {
        ingredientsArray.push(<li>{props.data.usedIngredients[n].name}</li>);
      }
    }
  }

  if (props.data.hasOwnProperty("missedIngredients")) {
    for (var n = 0; n < props.data.missedIngredients.length; n++) {
      if (props.data.missedIngredients[n].name.length > 32) {
        ingredientsArray.push(<li className="missing-ingredient">{props.data.missedIngredients[n].name.slice(0, 32) + "..."}</li>);
      } else {
        ingredientsArray.push(<li className="missing-ingredient">{props.data.missedIngredients[n].name}</li>);
      }
    }
  }


  return (
    <div className="recipe-entry" id={props.id}>
      <CardGroup>
        <Card>
          <Parallax className="recipe-image img-hover" bgImage={imgLink} strength={100}></Parallax>
          <CardBody>
            <CardTitle className="recipe-title">{title}</CardTitle>
            <CardText className="recipe-ingredients">{ingredientsArray.map((element, index) => {
              return element;
            })}</CardText>
            <div className="center">
              <a onClick={(event) => {props.onFavoriteHandler(event, props.data)}}>
                <span className="recipe-favorite">
                  <TiHeartFullOutline />
                </span>
              </a>
            </div>
          </CardBody>
        </Card>
      </CardGroup>
    </div>);
}

export default RecipeEntry;
