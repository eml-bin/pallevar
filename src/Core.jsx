import React from 'react';

import Topbar from './components/Topbar';
import Footer from './components/Footer';
import Welcome from './views/Welcome';

import { Jumbotron } from 'react-bootstrap'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home = () => {

  return (
    <>
      <Router>
        <Topbar />
          <Switch>
            <header className="masterhead">
              <Route exact path="/">
                <Welcome />
              </Route>
            </header>
          </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Home;
