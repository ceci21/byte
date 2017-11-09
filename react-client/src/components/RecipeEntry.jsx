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
  // https://spoonacular.com/recipes/hearty-chicken-chorizo-kale-bean-and-farro-soup-474468
  if (props.data.hasOwnProperty("usedIngredients")) {
    for (var n = 0; n < props.data.usedIngredients.length; n++) {
      if (props.data.usedIngredients[n].name.length > 32) {
        ingredientsArray.push(<li key={'li-' + n} value={n}>{props.data.usedIngredients[n].name.slice(0, 32) + "..."}</li>);
      } else {
        ingredientsArray.push(<li key={'li-' + n} value={n}>{props.data.usedIngredients[n].name}</li>);
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

  var recipeUrl = props.data.image.slice(0, -4);
  var r = recipeUrl.indexOf('recipeImages/');
  recipeUrl = recipeUrl.slice(0, r) + recipeUrl.slice(r + 13);
  console.log("Url string: ", recipeUrl);

  //https://spoonacular.com/red_velvet_cake_balls-66814
  //https://spoonacular.com/recipeImages/red_velvet_cake_balls-66814.jpg


  return (
    <div className="recipe-entry">
      <CardGroup>
        <Card style={{"border":"1px solid #cccccc", "padding": "1em", "margin":"2em 0em 2em 0em", "margin-top": "2em"}}>
          <a href={recipeUrl}><Parallax className="recipe-image img-hover" bgImage={imgLink} strength={100}></Parallax></a>
          <CardBody>
            <a href={recipeUrl}><CardTitle className="recipe-title">{title}</CardTitle></a>
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
