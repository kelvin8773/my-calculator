import React from 'react';
import Display from './display';
import ButtonPanel from './button_panel';
import Calculate from '../logic/calculate';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      formula: '',
      result: '',
    };
  }

  handleClick(name) {
    const { formula, result } = this.state;
    const numberDigit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    if (numberDigit.includes(name)) {
      const data = {
        formula: formula.concat(name),
        button: name
      }
      this.setState(Calculate(data));
    }

    const [numberOne, operation, numberTwo] = formula.split(' ');
    let button;
    if (numberTwo) {
      button = operation;
      this.setState(Calculate({ formula, button }))
    }
    this.setState(Calculate({
      formula: numberOne,
      button: button
    }))

  }

  render() {
    const { formula, result } = this.state;
    return (
      <div className="calculator">
        <Display
          formula={formula}
          result={result} />
        <ButtonPanel onClick={name => this.handleClick(name)} />
      </div>
    );
  }
}

export default App;
