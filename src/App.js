import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Services from "./pages/services/Services";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import NoMatch from "./pages/NoMatch/NoMatch";
import "./App.scss";

function App() {
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
