import Operate from './operate';
import Num from '../utilities/num';


const Calculate = (data, button) => {
  const numberDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
  const operations = ['÷', 'x', '+', '-'];
  const otherButtons = ['AC', '+/-', '%', '='];

  let {
    numOne, operation, numTwo, result,
  } = data;

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


  if (!numTwo) {
    result = numOne;
  } else {
    result = Operate(numOne, numTwo, operation);
  }

  return {
    numOne,
    numTwo,
    operation,
    result,
  };
};

export default Calculate;
