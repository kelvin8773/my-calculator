import Operate from './operate';

const Calculate = (data) => {
  const { formula, button } = data;
  const [numberOne, operation, numberTwo] = formula.split(' ');

  switch (button) {
    case 'AC':
      return { formula: '', result: '' };
    case '=':
      return {
        formula: formula,
        result: Operate(numberOne, numberTwo, operation),
      }
    case '%':
    case '+/-':
      if (numberTwo) {
        const convertNum = Operate(numberTwo, null, button);
        return {
          formula: [numberOne, operation, convertNum].join(' '),
          result: Operate(numberOne, convertNum, operation),
        }
      }
      const convertNum = Operate(numberOne, null, button);
      return {
        formula: [convertNum, operation, numberTwo].join(' '),
        result: convertNum,
      }
  }

}

export default Calculate;