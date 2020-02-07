import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name, onClick } = props;

  return (
    <button
      type="button"
      className="button"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: '',
};

export default Button;
