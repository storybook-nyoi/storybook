import React from "react";
import { useDispatch } from "react-redux";
import {
  togglePage,
  createStory,
  createPictures,
  initializePage,
} from "../reducers/storyReducer.js";

export default function ListItem(props) {
  const dispatch = useDispatch();

  return (
    <button
      className="btn btn-primary mt-3 w-full"
      onClick={() => {
        dispatch(initializePage());
        dispatch(togglePage(true));
        dispatch(createStory(props.storyObj));
        dispatch(createPictures(props.pictureObj));
      }}
    >
      {props.name}
    </button>
  );
}
