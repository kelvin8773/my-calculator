import React from 'react';
import PropTypes from 'prop-types';
import Num from '../utilities/num';

const Display = props => {
  let {
    numOne, numTwo, total, finish
  } = props;
  const { operation } = props;

  numOne = numOne ? Num.toCommas(numOne) : numOne;
  numTwo = numTwo ? Num.toCommas(numTwo) : numTwo;
  total = total ? Num.toCommas(total) : total;

  const formula = [numOne, operation, numTwo].join(' ');
  const blinkCursor = <span className="text-blink background-orange" />;
  let firstLine, secondLine;

  if (!finish) {
    firstLine = <h2 className="main"> {formula} {blinkCursor} </h2>;
    secondLine = <h2 className="secondary"> = {total} </h2>;
  } else {
    firstLine = <h2 className="secondary"> {formula} </h2>;
    secondLine = <h2 className="main"> = {total} </h2>;
  };


  return (
    <div id="display" className="display">
      {firstLine}
      {secondLine}
    </div>
  );


};

Display.propTypes = {
  numOne: PropTypes.string,
  numTwo: PropTypes.string,
  operation: PropTypes.string,
  total: PropTypes.string,
  finish: PropTypes.bool,
};

Display.defaultProps = {
  numOne: '',
  numTwo: '',
  operation: '',
  total: '0',
  finish: false,
};

export default Display;
