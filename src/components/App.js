import React from 'react';
import Display from './display';
import ButtonPanel from './button_panel';
import Calculate from '../logic/calculate';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numOne: null,
      operation: null,
      numTwo: null,
      result: null,
    };
  }

  handleClick(button) {
    try {
      this.setState(prevState => Calculate(prevState, button));
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const {
      numOne, operation, numTwo, result,
    } = this.state;
    return (
      <div className="calculator">
        <Display
          numOne={numOne}
          numTwo={numTwo}
          operation={operation}
          result={result}
        />
        <ButtonPanel onClick={name => this.handleClick(name)} />
      </div>
    );
  }
}

export default App;
