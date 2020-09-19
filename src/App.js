import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, HashRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <NavBar />
          <Switch>
            {/*<Route exact path='/' component={MainPage} />*/}
          </Switch>

          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button class="ui button" role="button">Btn with Semantic-UI</button>
        
        </HashRouter>
      </div>
    );
  }
}

export default App;
