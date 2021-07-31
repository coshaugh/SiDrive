import React from "react";

const Home = () => (
  <div className="row">
    <div className="col-6">
      <h5>About</h5>
      <p>We are an online community amed to speed hardware development.</p>
    </div>

    <div className="col-6">
      <h5>Tutorial / Walk-through</h5>
      <ul>
        <li>community goal</li>
        <li>problem space, show how the tool drives value</li>
        <li>display current chip coverage / # of chips available</li>
      </ul>
    </div>
  </div>
);

export default Home;
