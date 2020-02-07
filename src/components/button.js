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
  onClick: PropTypes.func,
};

Button.defaultProps = {
  name: '',
  onClick: () => { },
};

export default Button;
