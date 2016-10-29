'use strict';

import React from 'react';

module.exports = () => {
  return (
    <svg width="100" height="110">
      <path d="M 0,0 C 0,90, 20,100, 50,100 C 80,100, 100,90, 100,0 C 80,20, 50,20, 50,20 C 50,20, 20,20, 0,0"
        fill="green" />
      <path d="M 43,55 L 50,75, 57,55 Z" fill="black" />
      <circle cx="29" cy="40" r="20" fill="yellow" />
      <circle cx="33" cy="40" r="10" fill="black" />
      <circle cx="71" cy="40" r="20" fill="yellow" />
      <circle cx="67" cy="40" r="10" fill="black" />
      <ellipse cx="20" cy="95" rx="3" ry="8" fill="black" />
      <ellipse cx="25" cy="95" rx="3" ry="8" fill="black" />
      <ellipse cx="30" cy="95" rx="3" ry="8" fill="black" />
      <ellipse cx="70" cy="95" rx="3" ry="8" fill="black" />
      <ellipse cx="75" cy="95" rx="3" ry="8" fill="black" />
      <ellipse cx="80" cy="95" rx="3" ry="8" fill="black" />
    </svg>
  );
};
