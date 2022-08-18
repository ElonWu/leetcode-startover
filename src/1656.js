/**
 * @param {number} n
 */
 var OrderedStream = function (n) {
  this.ptr = 1;
  this.list = new Array(n);
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  this.list[idKey - 1] = value;

  if (idKey !== this.ptr) return [];

  let result = [];

  while (true) {
    const target = this.list[this.ptr - 1];
    if (target === undefined) break;
    result.push(target);
    this.ptr++;
  }

  return result;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */