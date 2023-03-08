import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglePage, incrementPage, decrementPage } from '../reducers/storyReducer.js'

export default function StoryBook(props){
    const state = useSelector((state) => state.stories);
    const dispatch = useDispatch()
    return (
        <div className="flex h-4/5 flex-col justify-center align-center">
            <button className="btn btn-primary self-end m-1" onClick={()=>dispatch(togglePage(false))}>Pick a New Story</button>
            <div className="flex w-full h-full justify-center">
                <div className="card bg-base-100 shadow-xl self-center align-center w-2/5 h-5/6">
                    <div className="card-body flex justify-center items-center">
                        <div>
                            {state.story? <Page page={state.story[state.currPage]}/> : 'Im loading'}
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl self-center align-center w-2/5 h-5/6">
                    <div className="card-body justify-center items-center">
                        <div>
                            {state.pictures? <Picture picture={state.pictures[state.currPage]}/> : 'Im loading'}
                        </div>
                    </div>
                </div>
            </div>
            <div className="justify-end self-center w-auto">
                <div className="btn-group grid grid-cols-2">
                    <button className="btn btn-primary" onClick={()=>dispatch(decrementPage())}>Previous</button>
                    <button className="btn btn-primary" onClick={()=>dispatch(incrementPage())}>Next</button>
                </div>
            </div>
        </div>
    )
}

function Page(props) {
  return <p className="w-5/8">{props.page}</p>;
}

function Picture(props) {
  return (
    <img
      className="max-w-xs"
      src={props.picture}
    />
  );
}
