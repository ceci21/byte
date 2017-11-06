import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RecipeList from './components/RecipeList.jsx';
import _Test from './_Test.jsx'; /* Feel free to remove me! */
import searchYummly from './lib/searchYummly.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    //this.onClickHandler = this.onClickHandler.bind(this);
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

  onClickHandler() {
    searchYummly(null, (data) => {
      console.log('API Data: ', data);
    });
  }

  render () {
    return (<div>
      <input type="text" onChange={(event) => {this.setState({query: event.target.value})}}></input>
      <button onClick={(event) => {
        this.onClickHandler();
      }}>API Test</button>
      <h1>User List</h1>
      <Search />
      <RecipeList items={this.state.items} />
      <_Test /> {/*Feel free to remove me!*/}
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
