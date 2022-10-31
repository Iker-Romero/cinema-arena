import React from 'react';

const CustomButton = (props: { id: string; text: string; color: string }) => {
  const { id, text, color } = props;

  const buttonStyles = {
    backgroundColor: color,
  } as React.CSSProperties;

  return (
    <button id={id} style={buttonStyles}>
      {text}
    </button>
  );
};

export default CustomButton;
