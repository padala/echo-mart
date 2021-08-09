import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MinusIcon = ({ ...args }): JSX.Element => {
  return (
    <svg
      fill="none"
      height="12"
      stroke="#60A5FA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...args}
    >
      <circle cx="6" cy="6" r="5" />
      <line x1="4" x2="8" y1="6" y2="6" />
    </svg>
  );
};

export default MinusIcon;
