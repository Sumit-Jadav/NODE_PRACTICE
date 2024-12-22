const sum = (a, b) => {
  return a + b;
};
const min = (a, b) => {
  return a - b;
};
// module.exports = sum;

// module.exports = min; //! Will overwright above export

// module.exports = { sum, min };

module.exports.sum = sum;
module.exports.min = min;
