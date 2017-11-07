import React from 'react';

const RecipeEntry_Test = (props) => (
  <div className="recipe-entry" id={props.id}>
    <h4>{props.data.recipeName}</h4>
    <img height="100" width="100" src={props.data.imageUrlsBySize["90"]}/>
    <ul>{props.data.ingredients.map((element, index) => {return <li>{element}</li>})}</ul>
  </div>
);

export default RecipeEntry_Test;
