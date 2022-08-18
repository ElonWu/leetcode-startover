/**
 * @param {string} equation
 * @return {string}
 */
 var solveEquation = function(equation) {
  let xCount = 0,
  sum = 0,
  dir = 1,
  passEqual = false,
  prev = '';

for (let i = 0; i <= equation.length; i++) {
  const char = equation[i];
  if (!char || ['+', '-', '='].includes(char)) {
    // 处理前一个完整字符
    if (prev[prev.length - 1] === 'x') {
      xCount +=
        dir *
        (prev === 'x' ? 1 : parseInt(prev.slice(0, prev.length - 1), 10));
    } else if (prev) {
      sum += dir * parseInt(prev, 10);
    }

    // 重置 prev
    prev = '';

    // 更新下一次的加减
    if (char === '=') {
      passEqual = true;
      dir = -1;
    } else if (char === '+') {
      dir = passEqual ? -1 : 1;
    } else if (char === '-') {
      dir = passEqual ? 1 : -1;
    }
  } else {
    prev += char;
  }
}

if (xCount === 0 && sum === 0) {
  return 'Infinite solutions';
}
if (xCount === 0) {
  return 'No solution';
}

return `x=${-1 * (sum / xCount)}`;
};