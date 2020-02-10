import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const ButtonPanel = props => {
  const names = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '+'],
    ['1', '2', '3', '-'],
    ['0', '.', '='],
  ];

  const { onClick } = props;

  const renderButton = name => {
    const wide = name === '0' ? 'button zero' : 'button';
    const sideButtons = ['÷', 'x', '+', '-', '='];
    const color = sideButtons.includes(name) ? 'background-orange' : 'background-white';

    return (
      <Button
        key={name}
        name={name}
        wide={wide}
        color={color}
        onClick={() => onClick(name)}
      />
    );
  };


  const renderRow = row => (
    <div key={row} className="panel-row">
      {
        row.map(name => (
          renderButton(name)
        ))
      }
    </div>
  );

  return (
    <div className="text-center button-panel">
      {names.map(row => (renderRow(row)))}
    </div>
  );
};

ButtonPanel.propTypes = {
  onClick: PropTypes.func,
};

ButtonPanel.defaultProps = {
  onClick: () => { },
};


export default ButtonPanel;
