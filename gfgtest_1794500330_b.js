// automated test file t4_1794500330
function t4_1794500330Sum(arr) {
  let total = 0;
  for (const x of arr) {
    total += x;
  }
  return total;
}
function t4_1794500330Avg(arr) { return arr.length ? t4_1794500330Sum(arr) / arr.length : 0; }
module.exports = { t4_1794500330Sum, t4_1794500330Avg };
