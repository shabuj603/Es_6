import React, { Component } from 'react'

const Navbar = (props) => {
  return ( 
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#"></a>
      Navbar<span className="badge badge-pill badge-secondary">{props.totalCounters} </span>
    </nav>
   );
} 
export default Navbar;
