import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    name, wide, color, onClick,
  } = props;
  const btnClass = wide ? 'button zero' : 'button';
  const colorClass = color ? 'background-white' : 'background-orange';

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
  wide: PropTypes.bool,
  color: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  name: '',
  wide: false,
  color: true,
  onClick: () => { },
};

export default Button;
