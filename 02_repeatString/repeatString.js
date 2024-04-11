const repeatString = function(string, repetitions) {
  if (repetitions < 0) {
    return "ERROR";
  }

  let newString = "";
  for (let i = 0; i < repetitions; i++) {
    newString += string;
  }
  return newString;
};

// Do not edit below this line
module.exports = repeatString;
