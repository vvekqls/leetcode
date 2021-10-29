/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const indexOfTwoSum = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (indexOfTwoSum.has(target - nums[i])) {
      return [indexOfTwoSum.get(target - nums[i]), i];
    }
    indexOfTwoSum.set(nums[i], i);
  }
  return [];
};
