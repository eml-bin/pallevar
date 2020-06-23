import React, { useState } from 'react';

import Topbar from './components/Topbar';
import Footer from './components/Footer';
import Routes from './Routes';

import UsModal from './components/modals/Us';
import MissionModal from './components/modals/Mission';

const Home = () => {

  const [usModalShow, showUs] = useState(false);
  const [missionModalShow, showMission] = useState(false);

  const handleCloseUs = () => showUs(false);
  const handleShowUs = () => showUs(true);

  const handleCloseMission = () => showMission(false);
  const handleShowMission = () => showMission(true);

  // const [contactModalShow, showContact] = useState(false);

  // const handleCloseContact = () => showContact(false);
  // const handleShowContact = () => showContact(true);

  // const [missionModalShow, showMission] = useState(false);

  // const handleCloseMission = () => showMission(false);

  return (
    <>
      <Topbar 
        showUs={handleShowUs}
        showMission={handleShowMission}
      />
      <Routes />    
      <Footer /> 

      <UsModal 
        showModal={usModalShow}
        handleCloseModal={handleCloseUs}
      /> 

      <MissionModal
        showModal={missionModalShow}
        handleCloseModal={handleCloseMission}
      />
    </>
  )
}

export default Home;
