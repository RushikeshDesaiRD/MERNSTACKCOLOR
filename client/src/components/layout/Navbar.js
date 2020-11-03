import React from 'react'
import { Link } from "react-router-dom";
export  function Navbar() {
  ///dashboard
  //add_gradient
    return (
        <div>
            <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
  <div className="container">
    <div class="navbar-brand">
      <Link class="navbar-item" to="/">
        <img
          src="https://res.cloudinary.com/dxrbrkfvv/image/upload/v1592307492/react-original_gjlpfv.png"
          alt=""
        />
      </Link>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start"></div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <Link to="/explore" class="button is-warning">
              <strong>explore</strong>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
        </div>
    )
}
export default Navbar;
