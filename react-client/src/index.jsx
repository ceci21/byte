import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import RecipeList_Test from './components/RecipeList_Test.jsx';
import Search from './components/Search.jsx';
import RecipeList from './components/RecipeList.jsx';
import _Test from './_Test.jsx'; /* Feel free to remove me! */
import {searchYummly} from './lib/searchYummly.js';
import SAMPLE_DATA from './data/SAMPLE_DATA.js';
import { Jumbotron } from 'react-bootstrap';
import NavBar from './components/NavBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      query: '',
      data: SAMPLE_DATA
    }

    this.onClickHandler = this.onClickHandler.bind(this);
    this.setStore = this.setStore.bind(this);
  }

  setStore(state) {
    console.log('SET STORE');
    this.setState(state)
  }

  componentDidMount() {
    $.ajax({
      url: '/users',
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  onClickHandler(e) {
    e.preventDefault();
    console.log('QUERY STATE: ', this.state.query);
    var options = {};
    options.ingredients = this.state.query.split(", ");
    var queryArray = options.ingredients;
    console.log('Query Array', queryArray);
    searchYummly(options, (matches) => {
      var resultsArray = [];
      console.log('API Data Matches Length: ', matches.length);
      console.log('API Data Matches Length: ', matches);

      for (var i = 0; i < matches.length; i++) {
        
        var currentMatchIngredientsArray = matches[i].ingredients;
        console.log('INGREDIENTS for', currentMatchIngredientsArray);

        //check if list of ingredients of match result is greater than query ingredient list
        //if so, then match will not be included in our results array. Continue on to next iteration
        //of for loo[]
        if (currentMatchIngredientsArray.length > queryArray.length) {
          console.log('Not a match');
          continue;
        }

        //otherwise, we cycle through the match's ingredient list and check if each ingredient
        //is included in our query ingredient list
        var isMatch = true;
        for (var j = 0; j < currentMatchIngredientsArray.length; j++) {

            var currentIngredientMashed = currentMatchIngredientsArray[j].split(' ').join('');
            var isFound = false;
            //check each ingredient to make sure it is included in query ingredient list
            for (var k = 0; k < queryArray.length; k++) {
              var queryIngredientMashed = queryArray[k].split(' ').join('');
              if (currentIngredientMashed.includes(queryIngredientMashed)) {
                isFound = true;
                //if ingredient is found, we can move on to checking next ingredient in our list
                break;
              }
            }
            //if the current ingredient is not found in the query ingredient list, then we do not include
            //in our results array and we break out of this for loop and go on to next match 
            if (!isFound) {
              isMatch = false;
              break;
            } 
        }
        //push to results array if every single ingredient can be found in query ingredient list
        if (isMatch) {
          console.log('Is a match! *********************************************************************');
          resultsArray.push(matches[i]);
        } else {
          console.log('Not a match');
        }
        

      }

      console.log('RESULTS ARRAY', resultsArray);
      console.log('MATCHES ARRAY', matches);
      this.setState({data: resultsArray});
     // this.setState({data: matches});
    });
  }

  bootstrapView() {
    return <div className="container">
      <NavBar />
      <Jumbotron>
        <h1>Hello world!</h1>
      </Jumbotron>
      <Search clickHandler={this.onClickHandler} setStore={this.setStore}/>
      <RecipeList_Test data={this.state.data} />
    </div>
  }

  testComponents() {
    return (<div>
      <input type="text" onChange={(event) => {this.setState({query: event.target.value})}}></input>
      <button onClick={(event) => {
        this.onClickHandler();
      }}>API Test</button>
      <RecipeList_Test data={SAMPLE_DATA}/>
      <h1>User List</h1>
      <Search clickHandler={this.onClickHandler} setStore={this.setStore}/>
      <RecipeList items={this.state.items} />
      <_Test /> {/*Feel free to remove me!*/}
    </div>);
  }

  render () {
    return <div>{this.bootstrapView()}</div>
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
