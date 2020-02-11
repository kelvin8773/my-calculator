import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    buttonName, wide, color, clickHandler,
  } = props;

  return (
    <button
      type="button"
      className={`${wide} ${color}`}
      onClick={clickHandler}
    >
      {buttonName}
    </button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string,
  wide: PropTypes.string,
  color: PropTypes.string,
  clickHandler: PropTypes.func,
};

Button.defaultProps = {
  buttonName: '',
  wide: 'button',
  color: 'background-orange',
  clickHandler: () => { },
};

export default Button;
