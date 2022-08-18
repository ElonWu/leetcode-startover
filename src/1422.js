/**
 * @param {string} s
 * @return {number}
 */
 var maxScore = function(s) {
  let offset = 0, max = -Infinity, oneCount = 0;

  for(let i = 0; i < s.length; i++) {
      if(s[i] === "1") {
          offset--;
          oneCount++;
      } else {
          offset++;
      }

      if(i < s.length - 1) {
          max = Math.max(max, offset);
      }
  }
  return max + oneCount;
};