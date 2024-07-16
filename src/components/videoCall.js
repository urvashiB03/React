import React, { useState, useRef } from 'react';
import { Video, LocalVideoTrack } from 'twilio-video';
import axios from 'axios';

const VideoCall = () => {
  const [room, setRoom] = useState(null);
  const localVideoRef = useRef();

  const startVideoCall = async () => {
    const response = await axios.post('/api/start-call');
    const { token } = response.data;
    const room = await Video.connect(token, { name: 'support' });
    setRoom(room);

    const localTrack = await Video.createLocalVideoTrack();
    localVideoRef.current.appendChild(localTrack.attach());
  };

  return (
    <div>
      <button onClick={startVideoCall}>Start Video Call</button>
      <div ref={localVideoRef}></div>
    </div>
  );
};

export default VideoCall;
