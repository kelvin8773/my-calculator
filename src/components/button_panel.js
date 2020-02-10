import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';
import { BUTTON_NAMES } from '../utilities/constants';

const ButtonPanel = props => {
  const { clickHandler } = props;

  const renderButton = buttonName => {
    const wide = buttonName === '0' ? 'button zero' : 'button';
    const sideButtons = ['÷', 'x', '+', '-', '='];
    const color = sideButtons.includes(buttonName) ? 'background-orange' : 'background-white';

    return (
      <Button
        key={buttonName}
        buttonName={buttonName}
        wide={wide}
        color={color}
        clickHandler={() => clickHandler(buttonName)}
      />
    );
  };


  const renderRow = row => (
    <div key={row} className="panel-row">
      {
        row.map(buttonName => (
          renderButton(buttonName)
        ))
      }
    </div>
  );

  return (
    <div className="text-center button-panel">
      {BUTTON_NAMES.map(row => (renderRow(row)))}
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};

ButtonPanel.defaultProps = {
  clickHandler: () => { },
};


export default ButtonPanel;
