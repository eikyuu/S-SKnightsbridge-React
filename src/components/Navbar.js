import React from "react";

const Navbar = (props) => {
  return (
    <header>
      <nav className="stroke navbar navbar-expand-lg navbar-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-5 mr-auto">
            <li className="nav-item active mr-3">
              <a className="nav-link" href="#home">
                ACCUEIL
              </a>
            </li>
            <li className="nav-item active mr-3">
              <a className="nav-link" href="#home">
                A PROPOS
              </a>
            </li>
            <li className="nav-item active mr-3">
              <a className="nav-link" href="#home">
                BOUTIQUE
              </a>
            </li>
            <li className="nav-item active mr-3">
              <a className="nav-link" href="#home">
                GALLERIE
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
