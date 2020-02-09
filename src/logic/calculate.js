import Operate from './operate';

const Calculate = data => {
  const { numOne, operation, numTwo } = data;

  if (!numTwo) return numOne;

  return Operate(numOne, numTwo, operation);
};

export default Calculate;
