// automated test file t9_1794500330
function t9_1794500330Sum(arr) {
  let total = 0;
  for (const x of arr) {
    total += x;
  }
  return total;
}
function t9_1794500330Avg(arr) { return arr.length ? t9_1794500330Sum(arr) / arr.length : 0; }
module.exports = { t9_1794500330Sum, t9_1794500330Avg };
