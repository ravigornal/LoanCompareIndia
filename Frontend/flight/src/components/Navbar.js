import React from 'react';
import './style.css'

function Navbar() {
  return (
    <div className="row ">
        <nav class="navbar navbar-dark bg-dark col-12">
            <a class="navbar-brand col-lg-12 col-md-6 col-sm-3" href="#" id="brand" >
            <img src="https://img.icons8.com/dusk/64/000000/airplane-take-off.png" className="image-fluid"/><span></span>
                Flight Search Engine
            </a>
        </nav>
    </div>
  );
}

export default Navbar;
