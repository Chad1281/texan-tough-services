import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Barns from "./pages/Barns";
import Blog from "./pages/Blog";
import Builds from "./pages/Builds";
import Construction from "./pages/Construction";
import Contact from "./pages/Contact";
import Questionnaire from "./pages/Questionnaire";
import Remodeling from "./pages/Remodeling";


function App() {
  return (
    <Router>
      <div>
        <Switch>          
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/barns" component={Barns} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/builds" component={Builds} />
          <Route exact path="/construction" component={Construction} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/questionnaire" component={Questionnaire} />
          <Route exact path="/remodeling" component={Remodeling} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
