import React from 'react';
import { Switch, HashRouter, Route } from 'react-router-dom';
import About from './components/About/About';
import { Container } from 'semantic-ui-react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import MainPage from './components/MainPage';
import Listings from './components/Listings';
import Post from './components/Post';
import BusinessInfo from './components/BusinessInfo';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  render() {
    return (
        <HashRouter>
          <NavBar />
          {/* <Container> */}
          <Switch>
            <Route exact path='/' component={About} />
            <Route exact path='/businesses' component={Listings} />
            <Route exact path='/post' component={Post} />
            {/*<Route exact path='/businesses/1' component={BusinessInfo} /> need to make dynammic later */}
            <Route path='/businesses/:id' render={(props) => <BusinessInfo {...props} />} /> 
          </Switch>
          {/* </Container> */}
        </HashRouter>
    );
  }
}

export default App;
