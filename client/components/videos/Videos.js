import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import './videos.scss';
import { startTimeArr, setTimeOutTime } from '../wheelsOnTheBus/WheelsOnTheBus'




const Videos = () => {
  const [count, setCount] = useState(0);
  const [playing, setPlay] = useState(true);
  const [massege, setMassege] = useState('');

  const commands = [
    {
      command: 'town',
      callback: () => {
        setPlay(true);
        setCount(count + 1);
        setMassege('AWESOME');
        setTimeout(() => setMassege(''), 2 * 1000);
      }
    },
    {
      command: 'round and round',
      callback: () => {
        setPlay(true);
        setCount(count + 1);
        setMassege('AWESOME');
        setTimeout(() => setMassege(''), 2 * 1000);
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
    <div className="conatainer-xl">
      <div className='player-wrapper'>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=e_04ZrNroTo?start=${startTimeArr[count]}`}
          width="560"
          height="560"
          playing={playing}
          controls={true}
          onPlay={handlePlay}
        />
      </div>
      <p>{transcript}</p>
      <p> {massege ? massege : ''} </p>
    </div>
  );
}

export default Videos;
