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

        if (currentMatchIngredientsArray.length > queryArray.length) {
          console.log('FALSE');
          //matches.splice
          //return 'FALSE';
        }

        for (var j = 0; j < currentMatchIngredientsArray.length; j++) {

            var currentIngredientMashed = currentMatchIngredientsArray[j].split(' ').join('');
            var isFound = false;
            for (var k = 0; k < queryArray.length; k++) {
              var queryIngredientMashed = queryArray[k].split(' ').join('');
              if (currentIngredientMashed.includes(queryIngredientMashed)) {
                isFound = true;
                break;
              }
            }

            if (!isFound) {
              console.log('FALSE');
              //return false;
            }
        }


      }




      this.setState({data: matches});
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
