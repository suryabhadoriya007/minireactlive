import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {NavLink} from 'react-router-dom';
import logo from '../src/images/logo.png';

import Button from '@material-ui/core/Button';
import './index.css';


const Navbar=()=>{
    return(
<>
<div className="container-fluid bg-nav">
    <div className='row'>
        <div className="col-11 mx-auto">

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink  className="navbar-brand text-capitalize" to="/"><img src={logo} className='' alt='logo img'/>  
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink  activeClassName='menu_active' exact className="nav-link" to="/">Developers <span className="sr-only">(current)</span></NavLink >
      </li>
      <li className="nav-item">
        <NavLink  activeClassName='menu_active' exact className="nav-link" to="/About">Product</NavLink >
      </li>
      <li className="nav-item">
        <NavLink  activeClassName='menu_active' exact className="nav-link" to="Services">Pricing</NavLink >
      </li>
      <li className="nav-item">
        <NavLink  activeClassName='menu_active' exact className="nav-link" to="Contact">About Us</NavLink>
      </li>
      <li className="nav-item">
        <NavLink  activeClassName='menu_active' exact className="nav-link" to="Contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink  activeClassName='menu_active' exact className="nav-link" to="Contact">Login</NavLink>
      </li>
      
      <Button variant="contained" color="secondary">
        Get Started
      </Button>
      
      
      
    </ul>
    
  </div>
</nav>

</div>

</div>

</div>
</>
    )

};

export default Navbar;
