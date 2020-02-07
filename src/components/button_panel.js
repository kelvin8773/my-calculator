/* eslint-disable arrow-parens */
/* eslint-disable react/require-default-props */

import React from 'react';
import Button from './button';

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hit: [],
    }
  }
  render() {
    return (
      <div className="text-center">

        <div>
          <Button value="AC" />
          <Button value="+/-" />
          <Button value="%" />
          <Button value="÷" />
        </div>
        <div>
          <Button value="7" />
          <Button value="8" />
          <Button value="9" />
          <Button value="X" />
        </div>
        <div>
          <Button value="4" />
          <Button value="5" />
          <Button value="6" />
          <Button value="-" />
        </div>
        <div>
          <Button value="1" />
          <Button value="2" />
          <Button value="3" />
          <Button value="+" />
        </div>
        <div>
          <Button value="0" />
          <Button value="." />
          <Button value="=" />
        </div>


      </div>
    );
  }
}

export default ButtonPanel;
