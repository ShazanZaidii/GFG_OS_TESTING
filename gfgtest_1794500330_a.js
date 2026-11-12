// automated test file t1_1794500330
function t1_1794500330Sum(arr) {
  let total = 0;
  for (const x of arr) {
    total += x;
  }
  return total;
}
function t1_1794500330Avg(arr) { return arr.length ? t1_1794500330Sum(arr) / arr.length : 0; }
module.exports = { t1_1794500330Sum, t1_1794500330Avg };
