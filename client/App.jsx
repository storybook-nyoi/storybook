import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import InputCard from './components/InputCard.jsx';
import StoryBook from './components/StoryBook.jsx';
import SideDrawer from './components/SideDrawer.jsx';
import { useSelector } from 'react-redux'; 

const App = () => {
  const state = useSelector((state) => state.stories)
  
  return(
    
    <div>
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col h-screen">
        <Navbar/>
        {state.storyToggle? <StoryBook/> : <InputCard/>}  
      </div> 
      <SideDrawer/>
    </div>
    
    </div>
  );
};
export default App;
