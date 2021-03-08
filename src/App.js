import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './Components/LandingWebsite/NavBar/NavBar';
import CreateWeb from './Components/LandingWebsite/User/CreateWebsite/CreateWebsite';

class App extends Component {

  render() {
    // let navLinks = {
    //   Home: "/",
    //   Menu: "/menu",
    //   Gallery: "/gallery",
    //   Contact: "/Contact",
    //   About: "/about",
    //   Login: "/login",
    // }

    // let routes = [() => <Home />]

    // let shopNameFirst = "Food";
    // let shopNameLast = "Spices";

    return (
      <BrowserRouter>
        <NavBar></NavBar>
        {/* <UploadImg/> */}
        {/* <Route exact path="/foodtemplate" component={() => <NavBar navLinks={navLinks} shopNameFirst={shopNameFirst} shopNameLast={shopNameLast} routes={routes} />} /> */}
        <Route path="/create" exact component={CreateWeb} ></Route>
      </BrowserRouter>

    );
  }
}
export default App;
