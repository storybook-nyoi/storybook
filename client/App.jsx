import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import InputCard from './components/InputCard.jsx';
import StoryBook from './components/StoryBook.jsx';
import SideDrawer from './components/SideDrawer.jsx';

const App = () => {
  let [state, setState] = useState({
    storyToggle: false,
    character: '',
    location: '',
    ending: '',
    story: undefined,
    pictures: undefined,
    currPage: undefined,
  });

  function createStory(storyDetails) {
    let newState = Object.assign({}, state);
    newState.storyToggle = true;
    setState(newState);
    fetch('/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: `Tell me a story about a ${state.character} that goes out into the ${state.location} and finds ${state.ending}`,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        let newState = Object.assign({}, state);
        newState.story = data.story;
        // newState.pictures = data.pictures;
        newState.currPage = 1;
        setState(newState);
      });
  }

  function backToChooseStory() {
    let newState = Object.assign({}, state);
    newState.storyToggle = false;
    setState(newState);
  }

  function updateCharacter(changed) {
    let newState = Object.assign({}, state);
    newState.character = changed;
    setState(newState);
  }

  function updateLocation(changed) {
    let newState = Object.assign({}, state);
    newState.location = changed;
    setState(newState);
  }

  function updateEnding(changed) {
    let newState = Object.assign({}, state);
    newState.ending = changed;
    setState(newState);
  }

  return (
    <div>
      <div className='drawer'>
        <input id='my-drawer' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content flex flex-col h-screen'>
          <Navbar />
          {state.storyToggle ? (
            <StoryBook
              backToChooseStory={backToChooseStory}
              page={state.story ? state.story[state.currPage] : undefined}
              picutre={
                state.pictures ? state.pictures[state.currPage] : undefined
              }
            />
          ) : (
            <InputCard
              createStory={createStory}
              updateCharacter={updateCharacter}
              updateLocation={updateLocation}
              updateEnding={updateEnding}
            />
          )}
        </div>
        <SideDrawer />
      </div>
    </div>
  );
};
export default App;
