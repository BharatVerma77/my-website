import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About"; // You will create this soon
import Projects from "./components/Projects"; // You will create this soon
import Resume from "./components/Resume"; // You will create this soon
import Contact from "./components/Contact"; // You will create this soon
import './App.css'; // Make sure you have your styles set up

function App() {
  return (
    <Router>
      {/* Navbar for navigation */}
      <Navbar />

      {/* Routes for different pages */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
