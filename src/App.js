import React from "react";
import "./App.css" 
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/Navtabs/navTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/footer"



function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </div>
      <Footer/>
    </Router>
    
  );
  
}
export default App;
