/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let count = {};
  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] ? (count[nums[i]] += 1) : (count[nums[i]] = 1);
  }
  let countArr = Object.entries(count);
  for (let i = 0; i < countArr.length; i++) {
    if (countArr[i][1] === 1) return countArr[i][0];
  }
};
