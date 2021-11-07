/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const list = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  return s.split("").reduce((total, val, idx) => {
    list[val] < list[s[idx + 1]] ? (total -= list[val]) : (total += list[val]);
    return total;
  }, 0);
};
