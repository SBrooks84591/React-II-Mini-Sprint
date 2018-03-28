import React, { Component } from 'react';
import './App.css';
import { people } from './people.js'
import {PeopleList} from './PeopleList'

class App extends Component { 
  constructor () {
    super();
    this.state = {
      People: []
    }
  }

  componentDidMount() {
    this.setState({People: people});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        
          <h1 className="App-title">Hello React app</h1>
          </header>
          <PeopleList people={this.state.People} />

        </div>
    );
  }
}

export default App;

