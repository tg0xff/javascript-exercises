const sumAll = function(start, end) {
  if (start < 0 || end < 0) {
    return "ERROR";
  }
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }
  let sum = start;
  for (let i = start + 1; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
