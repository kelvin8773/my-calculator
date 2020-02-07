import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { result } = props;
  return (
    <div id="display" className="display">
      <div>
        <code>
          {result}
          <span className="text-blink background-orange"> </span>
        </code>
      </div>
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
