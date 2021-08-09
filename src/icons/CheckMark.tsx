import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const CheckMarkIcon = ({ ...args }): JSX.Element => {
  return (
    <svg
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...args}
      fill="none"
      height="24"
      stroke="#38C2DE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
};

export default CheckMarkIcon;
