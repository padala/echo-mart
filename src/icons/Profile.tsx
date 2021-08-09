import React from 'react';

const ProfileIcon = (): JSX.Element => {
  return (
    <svg
      width="32"
      height="28"
      viewBox="0 0 32 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
        fill="url(#pattern0)"
        stroke="#777777"
        strokeWidth="2"
      />
      <path
        d="M28 8C30.2091 8 32 6.20914 32 4C32 1.79086 30.2091 0 28 0C25.7909 0 24 1.79086 24 4C24 6.20914 25.7909 8 28 8Z"
        fill="#FA5426"
      />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0" transform="scale(0.0025)" />
        </pattern>
        {/* <image id="image0" width="400" height="400" xlinkHref="../../public/favicon.png" /> */}
      </defs>
    </svg>
  );
};

export default ProfileIcon;
