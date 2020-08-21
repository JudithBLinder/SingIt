import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import './videos.scss';
import { startTimeArr, setTimeOutTime } from '../wheelsOnTheBus/WheelsOnTheBus'

const Videos = () => {
  const [count, setCount] = useState(0);
  const [played, setPlayed] = useState(30);
  const [playing, setPlay] = useState(true);
  const [player, setPlayer] = useState();

  const commands = [
    {
      command: 'town',
      callback: () => {
        setPlay(true);
        setCount(count + 1);
      }
    },
    {
      command: 'round and round',
      callback: () => {
        setPlay(true);
        setCount(count + 1);
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
          ref={player => setPlayer(player)}
          url={`https://www.youtube.com/watch?v=e_04ZrNroTo?start=${startTimeArr[count]}`}
          width="560"
          height="315"
          playing={playing}
          controls={true}
          onPlay={handlePlay}
        />
      </div>
      <p>{transcript}</p>
    </div>
  );
}

export default Videos;
