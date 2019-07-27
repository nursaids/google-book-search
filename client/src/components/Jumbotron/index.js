import React from "react";


function Jumbotron() {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      <h1>Google Books Search <i class="fas fa-book"></i></h1>
      <h2>BSearch your book and save them so you get back to them </h2>
    </div>
  );
}

export default Jumbotron;