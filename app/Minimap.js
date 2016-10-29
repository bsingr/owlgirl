'use strict';

import React from 'react';

function Minimap(props) {
  let {x, y} = props;
  x /= 10;
  y /= 10;
  x += 110;
  y += 110;
  return (
    <svg width="300" height="300">
      <rect x="100" y="100" width="100" height="100" fill="transparent" style={{
        stroke:'pink',
        strokeWidth:10
      }} />
      <circle cx={x} cy={y} r="2" fill="black" />
    </svg>
  );
};
Minimap.defaultProps = {
  x: 0,
  y: 0
}
module.exports = Minimap;
