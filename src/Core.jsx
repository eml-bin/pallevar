import React, { useState, useEffect } from 'react';
// import { Auth } from "aws-amplify";

import { AppContext } from "./libs/context";
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import Routes from './Routes';

const Home = () => {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  // useEffect(() => {
  //   onLoad();
  // }, [])

  // async function onLoad() {
  //   try {
  //     // await Auth.currentSession();
  //     userHasAuthenticated(true);
  //   } catch(e) {
  //     console.log(e)
  //   }

  //   setIsAuthenticating(false);
  // }

  return (
    // !isAuthenticating &&
    <>
      <Topbar />
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Routes />    
      </AppContext.Provider>
      <Footer /> 
    </>
  )
}

export default Home;
