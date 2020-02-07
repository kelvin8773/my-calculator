/* eslint-disable arrow-parens */
/* eslint-disable react/require-default-props */

import React from 'react';
import Button from './button';

class ButtonPanel extends React.Component {
  render() {
    return (
      <div className="text-center">

        <Button value='+-*/' />
        <Button value='789' />
        <Button value='456' />
        <Button value='123' />

      </div>
    )
  }
}

export default ButtonPanel;
