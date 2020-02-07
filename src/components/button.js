import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name, onClick } = props;
  const sideButtons = ['÷', 'x', '-', '+', '='];
  const btnClass = name === '0' ? 'button zero' : 'button';
  const colorClass = sideButtons.includes(name) ? 'background-orange' : 'background-white';

  return (
    <button
      type="button"
      className={`${btnClass} ${colorClass}`}
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
