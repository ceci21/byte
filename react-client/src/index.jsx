import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RecipeList from './components/RecipeList.jsx';
import _Test from './_Test.jsx'; /* Feel free to remove me! */
import {searchYummly} from './lib/searchYummly.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      query: ''
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
    console.log('CLICKED');
    console.log('EVENT: ', e.target);
    console.log('USER INPUT', e.target.value);
    // this.setState({
    //   query: e.target.value
    // })
    console.log('QUERY STATE: ', this.state.query);
    searchYummly(['butter', 'honey'], (data) => {
      console.log('API Data: ', data);
    });
  }

  render () {
    return (<div>
      <h1>User List</h1>
      <Search clickHandler={this.onClickHandler} setStore={this.setStore}/>
      <RecipeList items={this.state.items} />
      <_Test /> {/*Feel free to remove me!*/}
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
