import React from 'react';

const Display = (props) => (
  <div id="calculator-display" className="text-center" >
    <h2>
      {props.result}
    </h2>
  </div>
);

export default Display;
