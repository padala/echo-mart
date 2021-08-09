import React from 'react';

const Spinner: React.FC<{
  className?: string;
}> = ({ className, ...args }) => {
  return (
    // eslint-disable-next-line react/self-closing-comp
    <div
      className={`loader ease-linear rounded-full  border-8 border-t-8 border-gray-200 ${className}`}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...args}
    ></div>
  );
};

export default Spinner;
