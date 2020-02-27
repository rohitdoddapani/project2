import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Default from './components/Default';
import Nav from './components/Nav';
import Footer from './components/footer';
import Contact from './components/Contact';

class App extends Component {
  render(){
    return (
      <React.Fragment>
          <div id="page-wrapper">
          
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/contact" exact component={Contact} />
              <Route ><Default /></Route>
              
            </Switch>
            <Footer />
          
          </div>
      </React.Fragment>
    );
  }
}

export default App;
