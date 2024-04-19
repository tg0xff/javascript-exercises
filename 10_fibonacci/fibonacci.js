const fibonacci = function(nthNumber) {
  nthNumber = +nthNumber;
  if (nthNumber === 0) return 0;
  if (nthNumber < 0) return "OOPS";

  let sequenceHolder = [1, 1];
  let indexToggle = 0;
  for (let i = 3; i <= nthNumber; i++) {
    indexToggle = (indexToggle === 0) ? 1 : 0;
    sequenceHolder[indexToggle] = sequenceHolder[0] + sequenceHolder[1];
  }
  return sequenceHolder[indexToggle];
};

// Do not edit below this line
module.exports = fibonacci;
