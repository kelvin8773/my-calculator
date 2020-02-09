import React from 'react';
import Display from './display';
import ButtonPanel from './button_panel';
import Num from '../utilities/num';
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
    let {
      numOne, operation, numTwo, result,
    } = this.state;
    const numberDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    const operations = ['÷', 'x', '+', '-'];
    const otherButtons = ['AC', '+/-', '%', '='];

    if (numberDigits.includes(button)) {
      if (button === '.') {
        if ((numTwo && !numTwo.includes('.'))
          || (numOne && !numOne.includes('.'))) {
          if (numTwo || operation) {
            numTwo = numTwo ? numTwo + button : button;
          } else {
            numOne = numOne ? numOne + button : button;
          }
        }
      } else if (numTwo || operation) {
        numTwo = numTwo ? numTwo + button : button;
      } else {
        numOne = numOne ? numOne + button : button;
      }
    } else if (operations.includes(button)) {
      if (numOne || numTwo) operation = button;
    } else if (otherButtons.includes(button)) {
      switch (button) {
        case 'AC':
          numOne = null;
          numTwo = null;
          operation = null;
          result = null;
          break;
        case '+/-':
          if (numTwo) {
            numTwo = Num.updateSign(numTwo);
          } else {
            numOne = Num.updateSign(numOne);
          }
          break;
        case '%':
          if (numTwo) {
            numTwo = Num.updatePercent(numTwo);
          } else {
            numOne = Num.updatePercent(numOne);
          }
          break;
        case '=':
        default:
      }
    }

    result = Calculate({ numOne, operation, numTwo });
    this.setState({
      numOne, operation, numTwo, result,
    });
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
