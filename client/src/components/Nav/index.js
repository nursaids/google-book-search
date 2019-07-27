import React from "react";
import "./style.css";


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand logo" href="/">
        Book Search
      </a>
      <a className="navbar-brand" id="link" href="/">
        Search
      </a>
      <a className="navbar-brand" id="link" href="/books">
        Saved
      </a>
    </nav>
  );
}

export default Nav;