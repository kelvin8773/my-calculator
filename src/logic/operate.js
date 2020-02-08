import Big from "big-js";

const Operate = (numberOne, numberTwo, operation) => {
  if (!numberOne && !numberTwo) return '';

  if (numberTwo) {
    const one = new Big(numberOne);

    switch (operation) {
      case '+':
        return one.plus(numberTwo);
      case '-':
        return one.minus(numberTwo);
      case 'x':
        return one.times(numberTwo);
      case '÷':
        return one.div(numberTwo);
    }
  };

  switch (operation) {
    case '+/-':
      numberOne[0] === '-' ? numberOne.shift() : '-'.concat(numberOne);
      break;
    case '%':
      numberOne[numberOne.length - 1] === '%' ? numberOne.pop() : numberOne.concat('%');
      break;
  }

  return numberOne;

};



export default Operate;
