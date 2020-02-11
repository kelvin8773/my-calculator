const Num = (() => {
  const updateSign = num => (num[0] === '-' ? num.slice(1) : `-${num}`);
  const updatePercent = num => (num[num.length - 1] === '%' ? num.slice(0, -1) : `${num}%`);
  const toCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const updateDigits = (number, button) => {
    let updated = number;
    if ((button === '.' && !number.includes('.'))
      || button !== '.') {
      if (!number.includes('%')) {
        updated += button;
      } else {
        updated = `${updated.slice(0, -1) + button}%`;
      }
    }
    return updated;
  };

  return {
    updateSign,
    updatePercent,
    toCommas,
    updateDigits,
  };
})();

export default Num;
