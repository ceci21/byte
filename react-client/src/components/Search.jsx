import React from 'react';
import RecipeListItem from './RecipeListItem.jsx';

const Search = (props) => (
  <div className="search">
  <form>
    <div className="search-title">What's in your pantry?</div>
    <input className="search-input" type="text" onChange={(e) => {props.setStore({query: e.target.value})}} />
     <button className="search-button" onClick={props.clickHandler}>Search</button>
   </form>
  </div>
)

export default Search;
