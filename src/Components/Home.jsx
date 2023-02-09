import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-text">
          <h1>
            <span className="home-text-primary">Find Your</span>
            <span className="home-text-secondary"> Real Connections</span>
          </h1>
          <p className="home-paragraph">
            We are committed to helping singles find love and we are confident in
            our ability to do so. MatchMaker matches women and men for lasting and
            fulfilling relationships.
          </p>
          <button className="home-button">Join MatchMaker</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
