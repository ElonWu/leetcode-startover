/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxEqualFreq = function (nums) {
  let max = 0,
    cache = {},
    dupCache = {};

  for (let i = 0; i < nums.length; i++) {
    const target = nums[i];

    cache[target] = (cache[target] || 0) + 1;
    dupCache[cache[target]] = (dupCache[cache[target]] || 0) + 1;

    if (cache[target] > 1) {
      dupCache[cache[target] - 1] -= 1;
      if (dupCache[cache[target] - 1] === 0) {
        delete dupCache[cache[target] - 1];
      }
    }

    if (check(dupCache)) max = i + 1;
  }

  return max;
};

const check = (dupCache) => {
  const keys = Object.keys(dupCache),
    len = keys.length;

  if (len === 1) {
    // n 个数字都只出现 1 次
    // 1 个数出现 n 次
    return dupCache[keys[0]] === 1 || keys[0] === '1';
  }

  if (len === 2) {
    // 有 1 个数出现 1 次， 其他数字都出现 n 次
    if (dupCache[1] === 1) return true;
    const min = Math.min(keys[0], keys[1]);

    // 1 个数出现 n + 1 次， 其余全部出现 n 次，
    return dupCache[min + 1] === 1;
  }

  return false;
};