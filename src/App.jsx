import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import Navbar from "./pages/navbar/index";
import history from "./history";
import Index from "./pages/index";
import AboutUs from "./pages/aboutUs";
import Footer from "./pages/footer";
import Services from "./pages/services";

import "./dist/style.css";
import "./dist/app.css";

function App() {
  return (
    <div className=" h-auto bg-gray-100 text-sm font-light">
      <Router history={history}>
        <Switch>
          <Route path="/" exact>
            <Navbar />
            <Index />
            
          </Route>

          <Route path="/about-us">
            <Navbar />
            <AboutUs />
            <Footer />
          </Route>

          <Route path="/services" exact>
            <Navbar />
            <Services />
           
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
