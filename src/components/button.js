import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    name, wide, color, onClick,
  } = props;

  return (
    <button
      type="button"
      className={`${wide} ${color}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  wide: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  name: '',
  wide: 'button',
  color: 'background-orange',
  onClick: () => { },
};

export default Button;
