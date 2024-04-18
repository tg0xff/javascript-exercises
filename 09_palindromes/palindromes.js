const palindromes = function (s) {
  let cleanString = s.split("");
  cleanString = cleanString.filter((char) => /\w/.test(char));
  let reverseString = cleanString.reverse();
  cleanString = cleanString.join("");
  reverseString = reverseString.join("");
  return (cleanString === reverseString) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
