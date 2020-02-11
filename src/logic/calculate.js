import Operate from './operate';
import Num from '../utilities/num';
import {
  DIGITS,
  OPERATIONS,
  OTHER_BUTTON,
} from '../utilities/constants';

const Calculate = (data, buttonName) => {
  let {
    next, operation, total, finish,
  } = data;
  let [numOne, numTwo] = next ? next.split(' ') : [];

  try {
    if (DIGITS.includes(buttonName)) {
      if (numTwo || operation) {
        numTwo = numTwo ? Num.updateDigits(numTwo, buttonName) : buttonName;
      } else {
        numOne = numOne ? Num.updateDigits(numOne, buttonName) : buttonName;
      }
    } else if (OPERATIONS.includes(buttonName)) {
      if (numOne || numTwo) operation = buttonName;
    } else if (OTHER_BUTTON.includes(buttonName)) {
      switch (buttonName) {
        case 'AC':
          numOne = null;
          numTwo = null;
          operation = null;
          total = null;
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
          finish = true;
          break;
        default:
      }
    }

    if (!numTwo) {
      total = numOne;
    } else {
      total = Operate(numOne, numTwo, operation);
    }
  } catch (e) {
    total = ' ~Invalid Input~ ';
  }

  next = [numOne, numTwo].join(' ');
  return {
    operation,
    next,
    total,
    finish,
  };
};

export default Calculate;
