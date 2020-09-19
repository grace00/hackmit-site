import React from 'react';
import { Switch, HashRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import MainPage from './components/MainPage';
import Listings from './components/Listings';
import Post from './components/Post';
import BusinessInfo from './components/BusinessInfo';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <NavBar />
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route exact path='/businesses' component={Listings} />
            <Route exact path='/post' component={Post} />
            <Route exact path='/businesses/1' component={BusinessInfo} /> {/* need to make dynammic later */}
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
