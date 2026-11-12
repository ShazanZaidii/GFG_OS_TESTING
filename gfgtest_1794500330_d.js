// automated test file t7_1794500330
function t7_1794500330Sum(arr) {
  let total = 0;
  for (const x of arr) {
    total += x;
  }
  return total;
}
function t7_1794500330Avg(arr) { return arr.length ? t7_1794500330Sum(arr) / arr.length : 0; }
module.exports = { t7_1794500330Sum, t7_1794500330Avg };
