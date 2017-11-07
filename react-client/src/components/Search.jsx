import React from 'react';
import RecipeListItem from './RecipeListItem.jsx';

const Search = (props) => (
  <div className="search">
  <form>
    <label>Search</label>
    <input type="text" onChange={(e) => {props.setStore({query: e.target.value})}} />
     <button onClick={props.clickHandler}>Search</button>
   </form>
  </div>
)

export default Search;
