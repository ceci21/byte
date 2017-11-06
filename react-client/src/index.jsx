import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import _Test from './_Test.jsx'; /* Feel free to remove me! */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
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

  render () {
    return (<div>
      <h1>User List</h1>
      <List items={this.state.items} />
      <_Test /> {/*Feel free to remove me!*/}
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
