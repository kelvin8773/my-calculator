const Num = (() => {
  const updateSign = num => (num[0] === '-' ? num.slice(1) : `-${num}`);
  const updatePercent = num => (num[num.length - 1] === '%' ? num.slice(0, -1) : `${num}%`);
  const toCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return {
    updateSign,
    updatePercent,
    toCommas,
  };
})();

export default Num;
