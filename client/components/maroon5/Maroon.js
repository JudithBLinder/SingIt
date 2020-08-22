import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import './maroon5.scss';

const startTimeArr = [16, 29, 41, 55];
const setTimeOutTime = [
  (27.3 - startTimeArr[0]) * 1000,
  (39 - startTimeArr[1]) * 1000,
  (53.9 - startTimeArr[2]) * 1000,
  (200 - startTimeArr[3]) * 1000,
];

const rainbow = (str) => {
  return (
    <ul class="c-rainbow">
      <li class="c-rainbow__layer c-rainbow__layer--white">{str}</li>
      <li class="c-rainbow__layer c-rainbow__layer--orange">{str}</li>
      <li class="c-rainbow__layer c-rainbow__layer--red">{str}</li>
      <li class="c-rainbow__layer c-rainbow__layer--violet">{str}</li>
      <li class="c-rainbow__layer c-rainbow__layer--blue">{str}</li>
      <li class="c-rainbow__layer c-rainbow__layer--green">{str}</li>
      <li class="c-rainbow__layer c-rainbow__layer--yellow">{str}</li>
    </ul>
  )
}

const Maroon5 = () => {
  const [count, setCount] = useState(0);
  const [playing, setPlay] = useState(true);
  const [massege, setMassege] = useState('');

  const commands = [
    {
      command: 'between us',
      callback: () => {
        setCount(count + 1);
        setMassege(rainbow('GOOD JOB'));
        setTimeout(() => setMassege(''), 2 * 1000);
        setPlay(true);
      }
    },
    {
      command: 'girls like you',
      callback: () => {
        setCount(count + 1);
        setMassege(rainbow('AWESOME'));
        setTimeout(() => setMassege(''), 2 * 1000);
        setPlay(true);
      }
    },
    {
      command: 'yeah yeah',
      callback: () => {
        setCount(count + 1);
        setMassege(rainbow('YOUR ON FIRE!!!'));
        setTimeout(() => setMassege(''), 2 * 1000);
        setPlay(true);
      }
    },
    {
      command: '',
      callback: () => {
        setMassege('Try again');
        setTimeout(() => SpeechRecognition.startListening({ continuous: false }), 500)
      }
    }
  ]

  const { transcript } = useSpeechRecognition({ commands });

  function handlePlay() {
    const id = setTimeout(() => {
      setPlay(false)
      SpeechRecognition.startListening({ continuous: false });
    }, setTimeOutTime[count])
  }

  return (
    <div className="container container-xl flex-column p-2">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=aJOTlE1K90k?start=${startTimeArr[count]}`}
        width="560"
        height="560"
        playing={playing}
        controls={true}
        onPlay={handlePlay}
      />
      <p>You Said: {transcript}</p>
      {massege ? massege : ''}
    </div >
  );
}

export default Maroon5;
