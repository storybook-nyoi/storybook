import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  storyToggle: false,
  character: "",
  location: "",
  ending: "",
  story: null,
  pictures: null,
  currPage: 0,
};

const storySlice = createSlice({
  name: "stories",
  initialState,
  reducers: {
    updateCharacter: (state, action) => {
      state.character = action.payload;
    },
    updateLocation: (state, action) => {
      state.location = action.payload;
    },
    updateEnding: (state, action) => {
      state.ending = action.payload;
    },
    createStory: (state, action) => {
      console.log("State is : ", state, "Action Payload is: ", action.payload);
      state.story = action.payload;
    },
    createPictures: (state, action) => {
      state.pictures = action.payload;
    },
    togglePage: (state, action) => {
      state.storyToggle = action.payload;
    },
    initializePage: (state, action) => {
      state.currPage = 1;
    },
    incrementPage: (state, action) => {
      if (state.story[state.currPage + 1]) state.currPage += 1;
      else return;
    },
    decrementPage: (state, action) => {
      if (state.currPage > 1) state.currPage -= 1;
    },
    resetState: () => initialState,
  },
});

export const getStory = () => {
  return (dispatch, getState) => {
    const { character, location, ending } = getState().stories;

    dispatch(togglePage(true));

    fetch("/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: `Tell me a story about a ${character} that goes out into the ${location} and finds ${ending}. In 200 words.`,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        dispatch(initializePage());
        dispatch(createStory(data.story));
        dispatch(createPictures(data.pictures));
      });
  };
};

export const {
  updateCharacter,
  updateEnding,
  updateLocation,
  togglePage,
  incrementPage,
  decrementPage,
  createPictures,
  createStory,
  initializePage,
  resetState,
} = storySlice.actions;

export default storySlice.reducer;