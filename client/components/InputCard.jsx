import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCharacter, updateLocation, updateEnding, togglePage } from '../reducers/storyReducer.js';
import { getStory } from '../reducers/storyReducer.js'

export default function InputCard() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.stories);
  const characters = [
    "princess",
    "pirate",
    "horse",
    "toad",
    "software engineer",
  ];
  const locations = ["woods", "sea", "fields", "swamp", "job market"];
  const endings = [
    "peace",
    "an adventure",
    "trouble",
    "happiness",
    "an opportunity",
  ];

  function makeOptList(arr) {
    const output = [
      <option key={'default'} disabled hidden>
        -------
      </option>,
    ];
    for (let i = 0; i < arr.length; i++) {
      output.push(
        <option key={arr[i]} value={arr[i]}>
          {arr[i]}
        </option>
      );
    }
    return output;
  }

  return (
    <div className="flex h-4/5 flex-col justify-center align-center">
      <div className="card bg-base-100 shadow-2xl self-center align-center w-auto h-auto">
        <div className="card-body">
          <div className="p-10">
            <p className="text-xl">
              Tell me a story about a&nbsp;&nbsp;
              <select
                type="select"
                onChange={(e) => {
                  dispatch(updateCharacter(e.target.value));
                }}
                className="select-xs"
                defaultValue={"-------"}
              >
                {makeOptList(characters)}
              </select>
              &nbsp;&nbsp;that goes out into the&nbsp;&nbsp;
              <select
                onChange={(e) => {
                  dispatch(updateLocation(e.target.value));
                }}
                className="select-xs"
                defaultValue={"-------"}
              >
                {makeOptList(locations)}
              </select>
              &nbsp;&nbsp;and finds&nbsp;&nbsp;
              <select
                onChange={(e) => {
                  dispatch(updateEnding(e.target.value));
                }}
                className="select-xs"
                defaultValue={"-------"}
              >
                {makeOptList(endings)}
              </select>
            </p>
          </div>
          <button
            className='btn btn-primary'
            onClick={() => {
              dispatch(togglePage(true));
              dispatch(getStory());
            }}
          >
            Create Story
          </button>
        </div>
      </div>
    </div>
  );
}


