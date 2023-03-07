import React from 'react';

export default function InputCard(props) {
  const characters = [
    'princess',
    'pirate',
    'horse',
    'toad',
    'software engineer',
  ];
  const locations = ['woods', 'sea', 'fields', 'swamp', 'job market'];
  const endings = [
    'peace',
    'an adventure',
    'trouble',
    'happiness',
    'an opportunity',
  ];

  return (
    <div className='flex h-4/5 flex-col justify-center align-center'>
      <div className='card w-96 bg-base-100 shadow-xl self-center align-center w-auto h-auto'>
        <div className='card-body'>
          <p>
            Tell me a story about a&nbsp;&nbsp;
            <select
              type='select'
              onChange={(e) => {
                props.updateCharacter(e.target.value);
              }}
              className='select-xs'
              defaultValue={'-------'}
            >
              {makeOptList(characters)}
            </select>
            &nbsp;&nbsp;that goes out into the&nbsp;&nbsp;
            <select
              onChange={(e) => {
                props.updateLocation(e.target.value);
              }}
              className='select-xs'
              defaultValue={'-------'}
            >
              {makeOptList(locations)}
            </select>
            &nbsp;&nbsp;and finds&nbsp;&nbsp;
            <select
              onChange={(e) => {
                props.updateEnding(e.target.value);
              }}
              className='select-xs'
              defaultValue={'-------'}
            >
              {makeOptList(endings)}
            </select>
          </p>
          <button
            className='btn btn-primary'
            onClick={() => props.createStory()}
          >
            Create Story
          </button>
        </div>
      </div>
    </div>
  );
}

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
