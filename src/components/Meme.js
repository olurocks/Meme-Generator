import React from 'react';

const Meme = ({ background, base, body, head, wall }) => {
  return (
    <div style={{ 
        position: 'relative', 
        width: '400px', 
        height: '400px', 
        border: '1px solid #894b32', 
        borderRadius: '30px', 
        overflow: 'hidden', 
        boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1)'
      }}>
      <img src={`${process.env.PUBLIC_URL}/images/${background}`} alt="background" style={{ position: 'absolute', top:0, left: 0, width: '100%', height: '100%' }} />
      <img src={`${process.env.PUBLIC_URL}/images/${base}`} alt="base" style={{ position: 'absolute', top:0, left: 0, width: '100%', height: '100%' }} />
      <img src={`${process.env.PUBLIC_URL}/images/${body}`} alt="outfit" style={{ position: 'absolute', top:0, left: 0, width: '100%', height: '100%' }} />
      <img src={`${process.env.PUBLIC_URL}/images/${head}`} alt="head" style={{ position: 'absolute', top:0, left: 0, width: '100%', height: '100%' }} />
      <img src={`${process.env.PUBLIC_URL}/images/${wall}`} alt="wall" style={{ position: 'absolute', top:0, left: 0, width: '100%', height: '100%' }} />
    </div>
  );
};

export default Meme;
