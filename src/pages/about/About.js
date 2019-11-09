import React, { useEffect } from "react";
import "./About.scss";
import Chart from "chart.js";

Chart.defaults.global.defaultFontColor = "rgb(211, 211, 211)";

const About = () => {
  const chartRef = React.useRef();
  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");
    new Chart(myChartRef, {
      type: "horizontalBar",
      data: {
        //Bring in data
        labels: ["React.js", "Node.js", "GraphQL", "Gatsby.js", "Firebase"],
        datasets: [
          {
            data: [92, 86, 83, 90, 81],
            backgroundColor: [
              "#00D8FF",
              "#7AB460",
              "#E535AB",
              "#8D74AD",
              "#FFCB2D"
            ]
          }
        ]
      },
      options: {
        //Customize chart options
        title: {
          display: true,
          text: "Development experience",
          fontSize: 32,
          fontColor: "#ffffff"
        },
        legend: {
          display: false
        },
        scaleLabel: {
          display: true
        },
        maintainAspectRatio: false
      }
    });
  }, []);
  return (
    <>
      <div className="about first">
        <div className="container">
          <div className="section__about">
            <div className="col">
              <h1>About Me</h1>
              <p>
                My name is Radisav Savkovic and I'm a proffesional web developer
                with more than 2 years of experience in development, web design
                and graphic design. My field of experitise is MERN
                development(MongoDB, Exress, React, Node).
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about second">
        <div className="container">
          <div className="card">
            <div className="col__1">
              <p>
                My development journey started in 2017 when i saw some online
                courses of C++ on internet and same moment I got interested. At
                first I didn't know anything about web development, only
                programming languages I knew about where C++ and Pascal which I
                learned at school. After one week I started exploring and I
                found out about HTML, CSS and JavaScript. After wathing some
                online trainers tutorials I knew everything what should I do and
                where to learn from. That's where it all started, and from that
                moment everything got much easier. But main point in that
                journey at the beginning was JavaScript and remained until now.
                Just being able to create whatever functionality I want with
                JavaScript it motivates me to keep learning new technologies
                averyday.
              </p>
              <br />
              <p>At this moment I have knowledge with:</p>
              <ul>
                <li>HTML, CSS, SCSS</li>
                <li>JavaScript, React.js, Gatsby.js, Next.js</li>
                <li>MySql, PostgreSQL, MongoDB</li>
                <li>
                  Firebase, Firebase Firestore, Firebase Authentication,
                  Firebase Storage
                </li>
                <li>Material UI, Bootstrap 4, Semantic UI</li>
                <li>Node.js, Express.js</li>
              </ul>
            </div>
            <div className="col__2"></div>
          </div>
        </div>
      </div>
      <div className="about third">
        <div className="container">
          <div className="card">
            <div className="col__2">
              <canvas
                id="myChart"
                ref={chartRef}
                style={{
                  position: "absolute",
                  minHeight: "100%",
                  minWidth: "100%",
                  left: 0,
                  top: 0,
                  padding: "2rem"
                }}
              />
            </div>
            <div className="col__1">
              <h2>Levels of knowledge for different techologies</h2>
              <p>
                This are mine levels of experience I have with Front-end and
                Back-end techologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
