const removeFromArray = function(array, ...removeFromArray) {
  return array.filter((item) => !removeFromArray.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;
