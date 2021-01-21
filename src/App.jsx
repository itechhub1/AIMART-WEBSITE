import React, { useEffect } from "react";
import { Switch, Route, Router } from "react-router-dom";
import Navbar from "./pages/navbar/index";
import history from "./history";
import Index from "./pages/index";
import AboutUs from "./pages/aboutUs";
import Footer from "./pages/footer";
import Services from "./pages/assets/services";
import ReadMore from "./pages/read__more";
import ServicesDetails from "./pages/assets/services__details";
import Land from "./pages/assets/land";
import Houses from "./pages/assets/houses";

import { connect } from "react-redux";

import { getPropertices } from "./action/properties";
import {GetProfile} from './action/auth'

import "./dist/style.css";
import "./dist/app.css";

function App({ getPropertices,GetProfile }) {
  useEffect(() => {
    getPropertices();
    GetProfile()
  });

  return (
    <div className=" h-auto bg-gray-100 select-none text-sm font-light bounce">
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Index />
          </Route>

          <Route path="/about-us">
            <AboutUs />
          </Route>

          <Route path="/services" exact>
            <Services />
          </Route>

          <Route path="/read-more/:id" exact>
            <ReadMore />
          </Route>

          <Route path="/details/:id" exact>
            <ServicesDetails />
          </Route>

          <Route path="/land" exact>
            <Land />
          </Route>

          <Route path="/houses" exact>
            <Houses />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default connect(null, { getPropertices,GetProfile })(App);
