import React, { useState, useEffect } from 'react';

const VideoPlayer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      <video className="hidden lg:block" autoPlay muted loop id="myVideo">
        <source src="RP-L.mp4" type="video/mp4" />
      </video>
      <video className="lg:hidden" autoPlay muted loop id="myVideo">
        <source src="RP-P.mp4" type="video/mp4" />
      </video>
    </>
  );
};

export default VideoPlayer;