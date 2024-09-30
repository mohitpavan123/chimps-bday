import React from 'react';

const YouTubeVideo: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/5j-I2VsPEvE"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubeVideo;
