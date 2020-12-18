import React from "react";
//Stateless Functional Component - Lifecycle hooks cannot be used in them.
const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="abc">
          NavBar
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
