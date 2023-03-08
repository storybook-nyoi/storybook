import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglePage, createStory, initializePage} from '../reducers/storyReducer.js';
import { theGoldenTouch } from './DefaultStories.js'

export default function ListItem(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.stories)
  return (
    <div>
      <button className="btn btn-primary mt-3 w-full" onClick={()=>{
          dispatch(initializePage(props.name))
          dispatch(togglePage(true));
          dispatch(createStory(props.storyObj));
        }}>{props.name}</button>
    </div>
  );
}
