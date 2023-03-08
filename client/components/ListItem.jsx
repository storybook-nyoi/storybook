import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  togglePage,
  createStory,
  initializePage,
} from "../reducers/storyReducer.js";

export default function ListItem(props) {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        className="btn btn-primary mt-3 w-full"
        onClick={() => {
          dispatch(initializePage());
          dispatch(togglePage(true));
          dispatch(createStory(props.storyObj));
        }}
      >
        {props.name}
      </button>
    </div>
  );
}
