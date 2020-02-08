import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { formula, result } = props;
  return (
    <div id="display" className="display">
      <code className="formula">
        {formula}
        <span className="text-blink background-orange"></span>
      </code>
      <div className="result">
        = {result}
      </div>
    </div>
  );
};

Display.propTypes = {
  formula: PropTypes.string,
  result: PropTypes.string,
};

Display.defaultProps = {
  formula: '',
  result: '0',
};

export default Display;
