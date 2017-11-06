import React from 'react';
import RecipeListItem from './RecipeListItem.jsx';

const RecipeList = (props) => (
  <div>
    <h4> RecipeList </h4>
    There are { props.items.length } users.
    { props.items.map(item => <RecipeListItem item={item}/>)}
  </div>
)

export default RecipeList;
