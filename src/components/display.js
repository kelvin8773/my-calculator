import React from 'react';
import PropTypes from 'prop-types';
import Num from '../utilities/num';

const Display = props => {
  let {
    numOne, numTwo, result,
  } = props;
  const { operation } = props;

  numOne = numOne ? Num.toCommas(numOne) : numOne;
  numTwo = numTwo ? Num.toCommas(numTwo) : numTwo;
  result = result ? Num.toCommas(result) : result;


  return (
    <div id="display" className="display">
      <h2 className="main">
        {[numOne, operation, numTwo].join(' ')}
        <span className="text-blink background-orange" />
      </h2>
      <h2 className="secondary">
        =
        {result}
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
