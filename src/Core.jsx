import React, { useState } from 'react';

import Topbar from './components/Topbar';
import Footer from './components/Footer';
import Routes from './Routes';

import UsModal from './components/modals/Us';

const Home = () => {

  const [usModalShow, showUs] = useState(false);
  console.log('modal', usModalShow)

  const handleCloseUs = () => showUs(false);
  const handleShowUs = () => showUs(true);

  // const [contactModalShow, showContact] = useState(false);

  // const handleCloseContact = () => showContact(false);
  // const handleShowContact = () => showContact(true);

  // const [missionModalShow, showMission] = useState(false);

  // const handleCloseMission = () => showMission(false);

  return (
    <>
      <Topbar 
        showUs={handleShowUs}
      />
      <Routes />    
      <Footer /> 

      <UsModal 
        showModal={usModalShow}
        handleCloseModal={handleCloseUs}
      /> 
    </>
  )
}

export default Home;
