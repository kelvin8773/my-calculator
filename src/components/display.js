import React from 'react';

const Display = ({ result }) => (
  <div id="calculator-display" class="text-center" >
    <h2>
      {result}
    </h2>
  </div>
);

export default Display;