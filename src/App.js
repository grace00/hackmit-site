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
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      locations: [],
    };
  }

  updateCategories = (categories) => {
    this.setState({
      categories
    });
  }

  updateLocations = (locations) => {
    this.setState({
      locations
    });
  }

  render() {
    return (
        <HashRouter>
          <NavBar />
          {/* <Container> */}
          <Switch>
            <Route exact path='/' render={props => <About {...props} updateCategories={this.updateCategories} updateLocations={this.updateLocations} locations={this.state.locations}  categories={this.state.categories}/>}  />
            <Route exact path='/businesses' render={props => <Listings {...props} updateCategories={this.updateCategories} updateLocations={this.updateLocations} categories={this.state.categories}  locations={this.state.locations} />} />
            <Route exact path='/post' component={Post} />
            <Route path='/businesses/:id' render={(props) => <BusinessInfo {...props} />} /> 
          </Switch>
          {/* </Container> */}
        </HashRouter>
    );
  }
}

export default App;
