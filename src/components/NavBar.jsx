import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-warning">
      <div className="container-fluid">
        <a className="navbar-brand" href="./">
          MT
        </a>
        <form className="d-flex me-auto" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <ul className="navbar-nav d-flex mb-2 mb-lg-0 text-center">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
