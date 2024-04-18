const fibonacci = function(nthNumber) {
  if (nthNumber === 0) return 0;
  if (nthNumber < 0) return "OOPS";

  let secuenceHolder = [1, 1];
  let indexToggle = 0;
  for (let i = 3; i <= nthNumber; i++) {
    indexToggle = (indexToggle === 0) ? 1 : 0;
    secuenceHolder[indexToggle] = secuenceHolder[0] + secuenceHolder[1];
  }
  return secuenceHolder[indexToggle];
};

// Do not edit below this line
module.exports = fibonacci;
