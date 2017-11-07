import React from 'react';

const RecipeEntry_Test = (props) => (
  <div className="recipe-entry" id={props.id}>
    <h1>{props.data.title}</h1>
    <img height="100" width="100" src={props.data.img}/>
    <p>{props.data.description}</p>
  </div>
);

export default RecipeEntry_Test;
