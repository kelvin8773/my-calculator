import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { value } = props;

  return (
    <button type="submit" className="button">
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string,
};

Button.defaultProps = {
  value: '',
};

export default Button;
