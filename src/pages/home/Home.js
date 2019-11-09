import React from "react";
import "./Home.scss";
import Devconnector from "../../images/smartmockups_jwz2315y.png";
import Vscode from "../../images/smartmockups_jzkdpxbs.png";

const Home = () => {
  return (
    <>
      <div className="landing-page">
        <div className="lnd-left">
          <h1>
            Welcome to <span>My Portfolio Website</span>
          </h1>
          <p>I am Web Developer, Web Designer, Programmer</p>
        </div>
        <div className="lnd-right">
          <p className="quote">
            <i className="fas fa-quote-left"></i>Have no fear of perfection,
            you'll never reach it <i className="fas fa-quote-right"></i>
          </p>
          <p className="artist">Salvador Dali</p>
        </div>
        <div className="animation__area">
          <ul className="box__area">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="home first">
        <h1>Portfolio</h1>
        <p>
          Below you can see some projects I've been working on lately. I divide
          each project into four follow-up areas: comprehensive research,
          wireframing, design & development. This process allows me to create
          great product with client goals in mind.
        </p>
      </div>
      <div className="home second">
        <div className="container">
          <h1>Devconnector application</h1>
          <hr />
          <p>
            One of the fullstack application created from scratch starting from
            backend, and finishing the entire Front-end with design in
            React/Redux.
          </p>
          <div className="btn__inline">
            <a className="button">More on GitHub</a>
            <a className="button">online soon</a>
          </div>

          <img className="image__center" src={Devconnector} alt="" />
        </div>
      </div>
      <div className="home third">
        <div className="third__content">
          <h1>Dynamic shop app</h1>
          <p>
            This is one of many projects done with pure server-side JavaScript
            and Handlebars engine. This aproach allows all processes can be done
            on server.
          </p>
        </div>
      </div>
      <div className="fourth">
        <h1>Phases in the web site creation</h1>
        <div className="content">
          <div className="card project__definition">
            <h3>Definition</h3>
            <span>
              <i className="fas fa-book-reader"></i>
            </span>
          </div>
          <div className="card project__scope">
            <h3>Scope</h3>
            <span>
              <i className="fas fa-project-diagram"></i>
            </span>
          </div>

          <div className="card wireframes__architecture">
            <h3>Architecture</h3>
            <span>
              <i className="fas fa-ruler-combined"></i>
            </span>
          </div>

          <div className="card visual__design">
            <h3>Visual Design</h3>
            <span>
              <i className="fas fa-paint-brush"></i>
            </span>
          </div>

          <div className="card site__development">
            <h3>Development</h3>
            <span>
              <i className="fas fa-code"></i>
            </span>
          </div>

          <div className="card site__testing">
            <h3>Site Testing</h3>
            <span>
              <i className="fas fa-vial"></i>
            </span>
          </div>

          <div className="card launch">
            <h3>Launching</h3>
            <span>
              <i className="fas fa-rocket"></i>
            </span>
          </div>

          <div className="card maintenance">
            <h3>Maintenance</h3>
            <span>
              <i className="fas fa-cogs"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
