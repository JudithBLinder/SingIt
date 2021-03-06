import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import './wheelsonthebus.scss';

const startTimeArr = [9, 29, 41, 55];
const setTimeOutTime = [
  (41 - startTimeArr[0]) * 1000,
  (39 - startTimeArr[1]) * 1000,
  (53.9 - startTimeArr[2]) * 1000,
  (200 - startTimeArr[3]) * 1000,
];

const WheelsOnTheBus = () => {
  const [count, setCount] = useState(0);
  const [playing, setPlay] = useState(true);
  const [massege, setMassege] = useState('');

  const commands = [
    {
      command: 'round and round',
      callback: () => {
        setCount(count + 1);
        setMassege('GREAT JOB');
        setTimeout(() => setMassege(''), 2 * 1000);
        setPlay(true);
      }
    },
    {
      command: 'town',
      callback: () => {
        setCount(count + 1);
        setMassege('AWESOME');
        setTimeout(() => setMassege(''), 2 * 1000);
        setPlay(true);
      }
    },
    {
      command: 'open and shut',
      callback: () => {
        setCount(count + 1);
        setMassege('YOUR ON FIRE!!!');
        setTimeout(() => setMassege(''), 2 * 1000);
        setPlay(true);
      }
    },
    {
      command: '',
      callback: () => {
        setMassege('Try again');
        setTimeout(() => SpeechRecognition.startListening(), 500)
      }
    }
  ]

  const { transcript } = useSpeechRecognition({ commands });

  function handlePlay() {
    const id = setTimeout(() => {
      setPlay(false)
      SpeechRecognition.startListening();
    }, setTimeOutTime[count])
  }

  return (
    <div className="container container-xl flex-column p-2">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=e_04ZrNroTo?start=${startTimeArr[count]}`}
        width="560"
        height="560"
        playing={playing}
        controls={true}
        onPlay={handlePlay}
      />
      <p>You Said: {transcript}</p>
      <h1 className="displayMassege text-center"> {massege ? massege : ''} </h1>
    </div>
  );
}

export default WheelsOnTheBus;
