import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { numOne, numTwo, operation, result } = props;
  const toCommas = (x) => {
    if (!x) return;
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div id="display" className="display">
      <h2 className="main">
        {[toCommas(numOne), operation, toCommas(numTwo)].join(' ')}
        <span className="text-blink background-orange"></span>
      </h2>
      <h2 className="secondary">
        ={toCommas(result)}
      </h2>
    </div>
  );
};

Display.propTypes = {
  numOne: PropTypes.string,
  numTwo: PropTypes.string,
  operation: PropTypes.string,
  result: PropTypes.string,
};

Display.defaultProps = {
  numOne: '',
  numTwo: '',
  operation: '',
  result: '0',
};

export default Display;
