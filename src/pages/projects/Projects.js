import React from "react";
import "./Projects.scss";
import Devconnect from "../../images/smartmockups_jwz2315y.png";
import Shopapp from "../../images/smartmockups_jzkdpxbs.png";
import SocialApe from "../../images/smartmockups_k0pk0xnu.png";
import Gatsby from "../../images/smartmockups_k0pr9flw.png";

const Services = () => {
  return (
    <>
      <div className="projects first">
        <div className="container">
          <h1>Projects</h1>
          <p>
            This is are few exemples of my work I have worken on. All the
            functionalities are created by myself. All this websites are
            deployed on subdomains as showcase of my work, but also allowed for
            public view on my GitHub account
          </p>
        </div>
      </div>
      <div className="projects second">
        <div className="container">
          <div className="card">
            <div className="decript">
              <p>practice project</p>
              <h2>Devconnect</h2>
              <p>Application created with in mind to connect developers</p>
            </div>
            <div className="image">
              <img src={Devconnect} alt="" />
            </div>
          </div>
          <div className="card">
            <div className="decript">
              <p>practice project</p>
              <h2>Shop app</h2>
              <p>
                This is pure representational static app created with pure
                Node.js/Ejs
              </p>
            </div>
            <div className="image">
              <img className="sec" src={Shopapp} alt="" />
            </div>
          </div>
          <div className="card">
            <div className="decript">
              <p>practice project</p>
              <h2>SocialApe</h2>
              <p>Application created with in mind to connect developers</p>
            </div>
            <div className="image">
              <img className="third" src={SocialApe} alt="" />
            </div>
          </div>
          <div className="card">
            <div className="decript">
              <p>project</p>
              <h2>Gatsby blog</h2>
              <p>This is Gatsby.js blog application with contentful CMS</p>
            </div>
            <div className="image">
              <img src={Gatsby} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
