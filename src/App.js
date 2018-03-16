import React, { Component } from 'react';
import './App.css';
// import pokemonMetadata from 'pokemon-metadata';
import Layout from './layout.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ height: '800px', border: '1px solid #d9d9d9' }}>
      <Layout/>
        </div>
      </div>
    );
  }
}

export default App;
