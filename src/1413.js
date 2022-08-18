/**
 * @param {number[]} nums
 * @return {number}
 */
 var minStartValue = function(nums) {
  let min = 0, accu = 0;

  for(let num of nums) {
      accu += num;

      min = Math.min(min, accu);
  }

  return 1 - min;
};