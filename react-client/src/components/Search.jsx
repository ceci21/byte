import React from 'react';
import RecipeListItem from './RecipeListItem.jsx';

const Search = (props) => (
  <div>
  <form>
    <h4> Search </h4>
     <input type="text" onChange={ (e) => {props.setStore({query: e.target.value})}} /><button onClick={ (e) => {
       e.preventDefault();
       props.clickHandler(e);
     }}>API Test</button>
   </form>
  </div>
)

export default Search;
