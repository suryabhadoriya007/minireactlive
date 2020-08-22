import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Developers from './Developers';
import Contact from "./Contact";
import Services from './Services';
import About from "./About";
import Navbar from "./Navbar";
import { Route,Switch, Redirect } from 'react-router-dom';




const App=()=>{
  return(
    <>
    <Navbar/>
    <switch>
    <Route exact path="/"  component={Developers}/>
    <Route exact path="/About"  component={About}/>
    <Route exact path="/Services"  component={Services}/>
    <Route exact path="/Contact"  component={Contact}/>
    <Redirect to = '/'/>
    </switch>
      </>
  );
};


export default App;