/**
 * @param {string} s
 * @return {string}
 */
 var reformat = function(s) {
  let digitCount = 0, charCount = 0, result = new Array(s.length);

  for(let el of s) {
      result[isNaN(el) ? (charCount++ * 2 + 1) : (digitCount++ * 2)] = el;
  }

  if(Math.abs(digitCount - charCount) > 1) {
      return '';
  }

  if(charCount - digitCount === 1) {
      return result[result.length -1] + result.slice(0, result.length - 2).join("")
  }

  return result.join("")
};