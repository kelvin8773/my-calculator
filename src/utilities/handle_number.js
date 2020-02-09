const HandleNumber = (() => {
  const updateSign = (num) => num[0] === '-' ? num.slice(1) : '-' + num;
  const updatePercent = (num) => num[num.length - 1] === '%' ? num.slice(0, -1) : num + '%';

  return {
    updateSign,
    updatePercent,
  };
})();

export default HandleNumber;
