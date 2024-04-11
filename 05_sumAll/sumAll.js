const sumAll = function(start, end) {
  let sum = start;
  for (let i = start + 1; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
