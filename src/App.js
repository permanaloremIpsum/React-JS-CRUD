import React, { Component } from 'react'
import NavbarComp from './components/NavbarComp'
import JumbotronComp from './components/JumbotronComp'
import FooterComp from './components/FooterComp'
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import HomeContainer from './container/HomeContainer';
import CreateUserContainer from './container/CreateUserContainer';
import EditUserContainer from './container/EditUserContainer';
import DetailUserContainer from './container/DetailUserContainer';

class App extends Component {
  render() {
    return (
      <div>
        <NavbarComp />
        <JumbotronComp />
        <BrowserRouter>
          <Route path="/" exact component={HomeContainer}/>
          <Route path="/create" exact component={CreateUserContainer}/>
          <Route path="/edit/:id" exact component={EditUserContainer}/>
          <Route path="/detail/:id" exact component={DetailUserContainer}/>
        </BrowserRouter>
        <FooterComp />
      </div>
    )
  }
}

export default App
