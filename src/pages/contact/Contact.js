import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="row__1">
          <h2>You can send me an email</h2>
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
        </div>

        <h2>OR</h2>
        <div className="row__2">
          <div className="container">
            <h2>Contact me through my social network profiles</h2>
            <div className="social">
              <a
                href="https://www.facebook.com/rade.savkovic.7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/radisav-savkovic-3218b3156/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://twitter.com/rades_90"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/rade_savkovic/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
