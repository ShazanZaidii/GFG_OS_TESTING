// automated test file t5_1794500330
function t5_1794500330Sum(arr) {
  let total = 0;
  for (const x of arr) {
    total += x;
  }
  return total;
}
function t5_1794500330Avg(arr) { return arr.length ? t5_1794500330Sum(arr) / arr.length : 0; }
module.exports = { t5_1794500330Sum, t5_1794500330Avg };
