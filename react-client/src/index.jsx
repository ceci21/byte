import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import RecipeList from './components/RecipeList.jsx';
import Search from './components/Search.jsx';
import _Test from './_Test.jsx'; /* Feel free to remove me! */
import {searchYummly} from './lib/searchYummly.js';
import {searchSpoonacular} from './lib/searchSpoonacular.js';
import SAMPLE_DATA from './data/SAMPLE_DATA.js';
import { Jumbotron } from 'react-bootstrap';
import NavBar from './components/NavBar.jsx';
import { Parallax } from 'react-parallax';
import LoginSubmissionForm from './components/LoginSubmissionForm.jsx';
import Modal from 'react-modal'

const SERVER_URL = "http://127.0.0.1:3000";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      query: '',
      data: SAMPLE_DATA,
      searchMode: "Loose",
      username: null,
      loggedIn: false,
      userFavorites: [],
      view: 'home',
      modalLogin: false,
      modalIsOpen: true
    }

    this.setStore = this.setStore.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onLoginHandler = this.onLoginHandler.bind(this);
    this.onFavoriteHandler = this.onFavoriteHandler.bind(this);
    this.modalLogin = this.modalLogin.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }


  componentDidMount() {

  }

  setStore(state) {
    console.log('SET STORE');
    this.setState(state)
  }

  onFavoriteHandler(event, data) {
    event.preventDefault();
    var favorites = this.state.userFavorites.slice();
    favorites.push(data);
    this.setState({
      userFavorites: favorites
    });
    console.log('Favorites: ', favorites);
  }

  onLoginHandler(event) {
    event.preventDefault();
    var userInput = {
      username: event.target.username.value,
      password: event.target.password.value
    };
    $.ajax({
      url: SERVER_URL + '/login',
      type: 'POST',
      data: userInput,
      success: (username) => {
        this.setState({
          username: username,
          loggedIn: true
        });
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  onSearchHandler(e) {
    e.preventDefault();
    console.log('QUERY STATE: ', this.state.query);
    var options = {};

    options.ingredients = this.state.query.split(", ");
    var queryArray = options.ingredients;
    console.log('Query Array', queryArray);

    searchYummly(options, (matches) => {
      var resultsArray = [];
      for (var i = 0; i < matches.length; i++) {
        var currentMatchIngredientsArray = matches[i].ingredients;
        if (currentMatchIngredientsArray.length > queryArray.length) {
          continue;
        }
        var isMatch = true;
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
              isMatch = false;
              break;
            }
        }
        if (isMatch) {
          resultsArray.push(matches[i]);
        }
      }
      if (this.state.searchMode === "Strict") {
        this.setState({data: resultsArray});
      } else if (this.state.searchMode === "Loose") {
        this.setState({data: matches});
      }
    });
  }

  favoritesView() {
    return (<div className="container"><NavBar setStore={this.setStore} username={username} loggedIn={this.state.loggedIn} />
    <RecipeList data={this.state.data} onFavoriteHandler={this.onFavoriteHandler}/></div>);
  }

  modalLogin() {
    this.setState({
      modalLogin: true
    })

  }

  homeView() {
    if (this.state.loggedIn) {
      var username = this.state.username;
      var userDisplay = null;
    } else {
      var username = "Not Logged In"
      var userDisplay = (
        <div>
          <Parallax className="main-card" bgImage="http://chicago-woman.com/downloads/4988/download/Pantry%20Essentails-%20High%20Res.jpeg?cb=e59f0a5326ccffaeddcad2f813efb9ad" strength={400}>
            <div>
              <h1 className="subtitle"><br/>Why run to the grocery store when you have all the ingredients you need at home? Here at Byte, we help you see the potential of your pantry.</h1>
            </div>
          </Parallax>
        </div>);
    }

    return (
    <div>
      <NavBar setStore={this.setStore} modalLogin={this.modalLogin} username={username} loggedIn={this.state.loggedIn} />
      {userDisplay}
      <div className="container">
        <Modal
          isOpen={this.state.modalLogin}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <LoginSubmissionForm onLoginHandler={this.onLoginHandler}/>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
        </Modal>
        <Search clickHandler={this.onSearchHandler} setStore={this.setStore} appState={this.state}/>
        <RecipeList data={this.state.data} onFavoriteHandler={this.onFavoriteHandler}/>
      </div>
    </div>);
  }

  testComponents() {
    return (<div>
      <input type="text" onChange={(event) => {this.setState({query: event.target.value})}}></input>
      <button onClick={(event) => {
        this.onClickHandler();
      }}>API Test</button>
      <RecipeList data={SAMPLE_DATA}/>
      <h1>User List</h1>
      <Search clickHandler={this.onClickHandler} setStore={this.setStore}/>
      <RecipeList items={this.state.items} />
      <_Test /> {/*Feel free to remove me!*/}
    </div>);
  }

  render () {
    return (
      <div>
        {this.homeView()}
      </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
