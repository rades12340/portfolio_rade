import React, { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Services from "./pages/services/Services";
import About from "./pages/about/About";

import NoMatch from "./pages/NoMatch/NoMatch";
import "./App.scss";
import ReactGA from "react-ga";

const initializeReactGA = () => {
  ReactGA.initialize("UA-151941368-1");
  ReactGA.pageview("/");
};

function App() {
  useEffect(() => {
    initializeReactGA();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/portfolio" component={Projects} />
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/contact" component={Contact} /> */}
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
