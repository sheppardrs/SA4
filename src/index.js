import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
import './style.scss';
// const $ = require('jquery');

import SearchBar from './components/search_bar';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}; // nothing here yet
  }
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));


// console.log('starting up!');
