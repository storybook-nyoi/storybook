import React, {useState} from 'react';
import Navbar from './components/Navbar.jsx'
import InputCard from './components/InputCard.jsx';
import StoryBook from './components/StoryBook.jsx';
import SideDrawer from './components/SideDrawer.jsx';

const App = () => {

  let [state, setState] = useState({
    storyToggle : false,
    character: '',
    location: '',
    ending: ''
  })

  function createStory(storyDetails){
    let newState = Object.assign({}, state);
    newState.storyToggle = true;
    setState(newState);
    console.log(newState)
  }

  function backToChooseStory(){
    let newState = Object.assign({}, state);
    newState.storyToggle = false;
    setState(newState);
  }

  function updateCharacter(changed){
    let newState = Object.assign({}, state);
    newState.character = changed;
    setState(newState)
  }

  function updateLocation(changed){
    let newState = Object.assign({}, state);
    newState.location = changed;
    setState(newState)
  }

  function updateEnding(changed){
    let newState = Object.assign({}, state);
    newState.ending = changed;
    setState(newState)
  }

  return(
    
    <div>
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col h-screen">
        <Navbar/>
        {state.storyToggle? <StoryBook backToChooseStory={backToChooseStory}/> :<InputCard createStory={createStory} updateCharacter={updateCharacter} updateLocation={updateLocation} updateEnding={updateEnding}/>}  
      </div> 
      <SideDrawer/>
    </div>
    
    </div>
    
  ) 
};

export default App;
