import Big from 'big-js';

const Operate = (numOne, numTwo, operation) => {
  // refer http://mikemcl.github.io/big.js/#dp fro more info
  Big.DP = 10;
  Big.RM = 1;
  Big.NE = -5;
  Big.PE = 10;

  const removePercent = x => parseFloat(x.slice(0, -1)) / 100;

  if (numOne[numOne.length - 1] === '%') numOne = removePercent(numOne);
  if (numTwo[numTwo.length - 1] === '%') numTwo = removePercent(numTwo);

  const one = new Big(numOne);
  const two = new Big(numTwo);

  let result;
  switch (operation) {
    case '+':
      result = one.plus(two).toString();
      break;
    case '-':
      result = one.minus(two).toString();
      break;
    case 'x':
      result = one.times(two).toString();
      break;
    case '÷':
      if (two.eq(0)) {
        result = ' -N/A- ';
      } else {
        result = one.div(two).toString();
      }
      break;
    default:
  }

  return result;
};

export default Operate;
