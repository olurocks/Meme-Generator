import React from 'react';

const Meme = ({ background, base, body, head, wall }) => {
  return (
    <div style={{ position: 'relative', width: '300px', height: '300px' }}>
      <img src={`${process.env.PUBLIC_URL}/images/${background}`} alt="background" style={{ position: 'absolute', width: '100%', height: '100%' }} />
      <img src={`${process.env.PUBLIC_URL}/images/${base}`} alt="base" style={{ position: 'absolute', width: '100%', height: '100%' }} />
      <img src={`${process.env.PUBLIC_URL}/images/${body}`} alt="outfit" style={{ position: 'absolute', width: '100%', height: '100%' }} />
      <img src={`${process.env.PUBLIC_URL}/images/${head}`} alt="head" style={{ position: 'absolute', width: '100%', height: '100%' }} />
      <img src={`${process.env.PUBLIC_URL}/images/${wall}`} alt="wall" style={{ position: 'absolute', width: '100%', height: '100%' }} />
    </div>
  );
};

export default Meme;
