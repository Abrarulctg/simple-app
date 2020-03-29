import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './compunents/Navbar/Navbar';
import About from './compunents/About/About';
import Blog from './compunents/Blog/Blog';
import Home from './compunents/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
     <Navbar> </Navbar>
    <Switch>
    <Route path="/home">
          <Home> </Home>
       </Route><Route path="/about">
          <About> </About>
       </Route>
       <Route path="/blog">
          <Blog></Blog> 
       </Route>
       <Route exact path="/">
          <Home></Home>
       </Route>
       <Route path="*">
          <Home></Home>
       </Route>
   </Switch>
</Router>
    </div>
  );
}

export default App;
