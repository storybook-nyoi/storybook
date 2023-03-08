import React from "react";
import LoadingText from "./LoadingText.jsx";
import LoadingImage from "./LoadingImage.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  togglePage,
  incrementPage,
  decrementPage,
  resetState,
  toggleRenderFromFetch,
} from "../reducers/storyReducer.js";

export default function StoryBook() {
  const state = useSelector((state) => state.stories);
  const dispatch = useDispatch();

  function Page(props) {
    return (
      <p className="font-caroni w-5/8 text-2xl lg:text-2xl">{props.page}</p>
    );
  }

  function Picture(props) {
    return (
      <img
        // className="w-full h-full"
        className="w-[60%] m-auto object-contain"
        src={props.picture}
      />
    );
  }

  return (
    <div className="flex h-4/5 flex-col justify-center align-center">
      <button
        className="btn btn-primary self-end m-5"
        onClick={() => {
          dispatch(togglePage(false));
          dispatch(toggleRenderFromFetch(true));
          dispatch(resetState());
        }}
      >
        Pick a New Story
      </button>
      <div className="flex flex-col w-full h-full justify-center lg:flex-row">
        <div className="card bg-base-100 shadow-xl self-center align-center w-full h-5/6 lg:w-2/5">
          <div className="card-body flex justify-center items-center">
            <div>
              {state.story ? (
                <Page page={state.story[state.currPage]} />
              ) : (
                <LoadingText />
              )}
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl self-center align-center w-full h-5/6 lg:w-2/5">
          <div className="card-body justify-center items-center">
            <div>
              {state.pictures ? (
                <Picture picture={state.pictures[state.currPage]} />
              ) : (
                <LoadingImage />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="justify-end self-center w-auto">
        <div className="btn-group grid grid-cols-2">
          <button
            className="btn btn-primary border-l-2"
            onClick={() => dispatch(decrementPage())}
          >
            Previous
          </button>
          <button
            className="btn btn-primary"
            onClick={() => dispatch(incrementPage())}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
