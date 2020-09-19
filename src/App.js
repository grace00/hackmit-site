import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          </p>
        <button class="ui button" role="button">Btn with Semantic-UI</button>
      </div>
    );
  }
}

export default App;
