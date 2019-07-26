import React, { Component } from 'react';
import withRouter from 'react-router-dom/withRouter';
import NavLink from 'react-router-dom/NavLink';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark w-100">
  <a href="/" class="navbar-brand d-flex">
     <img className="mr-2" src={require('../img/logo.png')} width="25" height="25" alt=""/>
      WebShop
    </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse w-100" id="navbarNavDropdown">
    <ul class="navbar-nav w-100">
      <li class="nav-item active">
        <NavLink to="/"><a class="nav-link">All Products<span class="sr-only">(current)</span></a></NavLink>
      </li>
      <li class="nav-item">
      <NavLink to="/add"><a class="nav-link" >Add New</a></NavLink>
      </li>

      <div class=""></div>
    </ul>
  </div>
</nav>

    );
    }

export default withRouter(Navbar);