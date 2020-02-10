import Operate from './operate';
import Num from '../utilities/num';
import {
  DIGITS,
  OPERATIONS,
  OTHER_BUTTON
} from '../utilities/constants';

const Calculate = (data, button) => {

  let {
    numOne, operation, numTwo, result,
  } = data;

  const updateDigits = (number, button) => {
    let updated = number;
    if (button === '.') {
      if (!number.includes('.') && !number.includes('%')) updated += button;
    } else {
      if (!number.includes('%')) updated += button;
    }
    return updated;
  }

  try {
    if (DIGITS.includes(button)) {
      if (numTwo || operation) {
        numTwo = numTwo ? updateDigits(numTwo, button) : button;
      } else {
        numOne = numOne ? updateDigits(numOne, button) : button;
      }
    } else if (OPERATIONS.includes(button)) {
      if (numOne || numTwo) operation = button;
    } else if (OTHER_BUTTON.includes(button)) {
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

    };

    if (!numTwo) {
      result = numOne;
    } else {
      result = Operate(numOne, numTwo, operation);
    }

  } catch {
    console.log('Something Wrong!');
    result = "Wrong Input, try Again!"
  }

  return {
    numOne,
    numTwo,
    operation,
    result,
  };
};

export default Calculate;
