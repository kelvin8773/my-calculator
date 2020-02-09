import Operate from './operate';

const Calculate = (data, button) => {
  const { numOne, operation, numTwo } = data;
  console.log(numOne, operation, numTwo);

  if (!numTwo) return numOne;

  return Operate(numOne, numTwo, operation);
}

export default Calculate;