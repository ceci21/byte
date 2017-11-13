import React from 'react';
import ReactDOM from 'react-dom';
import { WithContext as ReactTags } from 'react-tag-input';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import SearchDropdown from './SearchDropdown.jsx';

const Search = (props) => (
  <div className="search">
  <form>
    <div className="search-title">So, what's in your pantry today?</div><br/>
    <ReactTags tags={props.tags}
      // classNames={{
      //   tags:
      // }}
      // suggestions={null}
      handleDelete={props.handleTagDelete}
      handleAddition={props.handleTagAdd}
      // handleDrag={null}
    />
      {/* <SearchDropdown title={props.appState.searchMode} setStore={props.setStore} className="search-dropdown" />
    <FormControl type="text"
      className="search-input"
      type="text" onChange={ (e) => {
        props.setStore({query: e.target.value})
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          props.clickHandler(e);
        }
      }}
    /> */}
    <Button className="search-button" onClick={props.clickHandler}>Search</Button>
   </form>
  </div>
)




export default Search;
