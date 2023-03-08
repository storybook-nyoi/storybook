import { createSlice } from "@reduxjs/toolkit";

const storySlice = createSlice({
    name: 'stories',
    initialState : {
        storyToggle: false,
        character: '',
        location: '',
        ending: '',
        story: null,
        pictures: null,
        currPage: 0,
    },
    reducers: {
        updateCharacter : (state, action) => {
            state.character = action.payload
        },
        updateLocation : (state, action) => {
            state.location = action.payload
        },
        updateEnding : (state, action) => {
            state.ending = action.payload
        },
        createStory : (state, action) => {
            console.log('State is : ', state, 'Action Payload is: ', action.payload)
            state.story = action.payload
        },
        createPictures : (state, action) => {
            state.pictures = action.payload
        },
        togglePage : (state, action) => {
            state.storyToggle = action.payload
        },
        initializePage : (state, action) => {
            state.currPage = 1;
        },
        incrementPage : (state, action) => {
            if (state.story[state.currPage + 1]) state.currPage += 1;
            else return
        },
        decrementPage : (state, action) => {
            if (state.currPage > 1) state.currPage -= 1;
        }
    }
})

export const  getStory = () => {
    return async (dispatch, state) => {
        dispatch(togglePage(true));
        fetch('/create', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt: `Tell me a story about a ${state.character} that goes out into the ${state.location} and finds ${state.ending}. In 200 words.`})
          })
          .then(data => data.json())
          .then((data) => {
            dispatch(initializePage());
            dispatch(createStory(data.story));
            dispatch(createPictures(data.pictures));
          })
        }
    }


export const { 
    updateCharacter, 
    updateEnding, 
    updateLocation, 
    togglePage, 
    incrementPage, 
    decrementPage, 
    createPictures, 
    createStory,
    initializePage } = storySlice.actions
export default storySlice.reducer