import React from 'react';

const ColorBox = ({ color }) => {
  const boxStyle = {
    width: '25px',
    height: '25px',
    backgroundColor: color,
    display: 'inline-block',
    border: '1px solid #000',
  };

  return <span style={boxStyle} />;
};

export default ColorBox;
