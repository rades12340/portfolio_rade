import React from "react";
import "./Services.scss";
import ReactIcon from "../../images/React-icon.svg";
import NodeIcon from "../../images/Node.js_logo.svg";
import GatsbyIcon from "../../images/gatsby.png";
import mysqlIcon from "../../images/mysql.png";
import ajaxIcon from "../../images/A3.png";
import bootstrap from "../../images/aa.png";
import mongo from "../../images/pngkey.com-white-png-327123.png";
import firebase from "../../images/firebase1.png";
import sass from "../../images/1_HFYKWq92BcXJIdata7d-JQ1.png";

const Services = () => {
  return (
    <>
      <div className="services first">
        <div className="container">
          <div className="services__content">
            <h1>Web Development Services</h1>
            <p>
              As freelance web developer I always make sure to have as best
              possible diverisy of services for clients
            </p>
            <ul>
              <li>Responsive Web Design</li>
              <li>Clean Code</li>
              <li>Optimized Page Speed</li>
              <li>Optimal Conversions</li>
            </ul>
          </div>
          {/* <div className="services__form">
            <form>
              <input type="text" name="name" placeholder="Full name" />
              <input type="text" name="email" placeholder="Email address" />
              <input type="text" name="website" placeholder="Website" />
              <input type="text" name="company" placeholder="Company" />
              <textarea
                rows="6"
                cols="20"
                style={{ overflow: "auto", resize: "none" }}
              ></textarea>{" "}
              <input type="submit" className="button" value="Submit" />
            </form>
          </div> */}
        </div>
      </div>

      <div className="services services__background">
        <div className="heading">
          <div className="container">
            <h1>Web Development</h1>
            <hr />
            <p>
              Web development is the work involved in developing a web site for
              the Internet (World Wide Web) or an intranet (a private network).
              Web development can range from developing a simple single static
              page of plain text to complex web-based internet applications (web
              apps), electronic businesses, and social network services. A more
              comprehensive list of tasks to which web development commonly
              refers, may include web engineering, web design, web content
              development, client liaison, client-side/server-side scripting,
              web server and network security configuration, and e-commerce
              development.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="card">
            <div className="react__content">
              <h2>React.js Websites</h2>
              <hr />
              <p>
                React (also known as React.js or ReactJS) is a JavaScript
                library for building user interfaces. It is maintained by
                Facebook and a community of individual developers and companies.
              </p>
              <br />
              <p>
                React can be used as a base in the development of single-page or
                mobile applications, as it is optimal for fetching rapidly
                changing data that needs to be recorded. However, fetching data
                is only the beginning of what happens on a web page, which is
                why complex React applications usually require the use of
                additional libraries for state management, routing, and
                interaction with an API Next.js and Gatsby.js are examples of
                such libraries
              </p>
            </div>
            <div className="react__icon">
              <img src={ReactIcon} alt="" />
            </div>
          </div>
          <div className="card">
            <div className="node__icon">
              <img src={NodeIcon} alt="" />
            </div>
            <div className="node__content">
              <h2>Node.js Websites</h2>
              <hr />
              <p>
                Node.js is an open-source, cross-platform, JavaScript run-time
                environment that executes JavaScript code outside of a browser.
                Node.js lets developers use JavaScript to write command line
                tools and for server-side scripting—running scripts server-side
                to produce dynamic web page content before the page is sent to
                the user's web browser. Consequently, Node.js represents a
                "JavaScript everywhere" paradigm, unifying web application
                development around a single programming language, rather than
                different languages for server- and client-side scripts.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="gatsby__content">
              <h2>Gatsby.js</h2>
              <hr />
              <p>
                Gatsby is a React-based, GraphQL powered, static site generator.
                What does that even mean? Well, it weaves together the best
                parts of React, webpack, react-router, GraphQL, and other
                front-end tools in to one very enjoyable developer experience.
                Don’t get hung up on the moniker ‘static site generator’. That
                term has been around for a while, but Gatsby is far more like a
                modern front-end framework than a static site generator of old..
              </p>
              <br />
              <ul>
                <li>Automatic routing based on your directory structure</li>
                <li>HTML code is generated server-side</li>
                <li>Easily extensible by plugin ecosystem</li>
                <li>Optimized for speed.</li>
                <li>
                  Easy data integration from sources like CMSs, SaaS services,
                  APIs, databases, file system
                </li>
              </ul>
            </div>
            <div className="gatsby__icon">
              <img src={GatsbyIcon} alt="" />
            </div>
          </div>
          <div className="card other">
            <div className="card__element">
              <div className="card__icon">
                <img src={mysqlIcon} alt="" />
              </div>
              <div className="card__content">
                <h4>MySql</h4>
                <p>
                  Mysql is an open-source relational database management system
                  which effectively helps to make a website friendly database
                  and to manage data in an organized way.
                </p>
              </div>
            </div>
            <div className="card__element">
              <div className="card__icon">
                <img src={ajaxIcon} alt="" />
              </div>
              <div className="card__content">
                <h4>Ajax</h4>
                <p>
                  Ajax is a collection of web development methods utilizing many
                  web technological innovation on the client side to make
                  asynchronous Web applications. This allows to create a dynamic
                  website.
                </p>
              </div>
            </div>
            <div className="card__element">
              <div className="card__icon">
                <img src={bootstrap} alt="" />
              </div>
              <div className="card__content">
                <h4>Bootstrap</h4>
                <p>
                  Mysql is an open-source relational database management system
                  which effectively helps to make a website friendly database
                  and to manage data in an organized way.
                </p>
              </div>
            </div>
            <div className="card__element">
              <div className="card__icon">
                <img src={mongo} className="mongo" alt="" />
              </div>
              <div className="card__content">
                <h4>MySql</h4>
                <p>
                  Mysql is an open-source relational database management system
                  which effectively helps to make a website friendly database
                  and to manage data in an organized way.
                </p>
              </div>
            </div>
            <div className="card__element">
              <div className="card__icon">
                <img src={firebase} alt="" />
              </div>
              <div className="card__content">
                <h4>MySql</h4>
                <p>
                  Mysql is an open-source relational database management system
                  which effectively helps to make a website friendly database
                  and to manage data in an organized way.
                </p>
              </div>
            </div>
            <div className="card__element">
              <div className="card__icon">
                <img src={sass} alt="" />
              </div>
              <div className="card__content">
                <h4>MySql</h4>
                <p>
                  Mysql is an open-source relational database management system
                  which effectively helps to make a website friendly database
                  and to manage data in an organized way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
