/**
 * @param {number} k
 */
 var MyCircularDeque = function(k) {
  this.k = k;
  this.list = new Array();
};

/** 
* @param {number} value
* @return {boolean}
*/
MyCircularDeque.prototype.insertFront = function(value) {
  if(this.isFull()) return false;

  this.list.unshift(value);
  return true;
};

/** 
* @param {number} value
* @return {boolean}
*/
MyCircularDeque.prototype.insertLast = function(value) {
  if(this.isFull()) return false;

  this.list.push(value);
  return true;
};

/**
* @return {boolean}
*/
MyCircularDeque.prototype.deleteFront = function() {
  if(this.isEmpty()) return false;

  this.list.shift();
  return true;
};

/**
* @return {boolean}
*/
MyCircularDeque.prototype.deleteLast = function() {
  if(this.isEmpty()) return false;

  this.list.pop();
  return true;
};

/**
* @return {number}
*/
MyCircularDeque.prototype.getFront = function() {
  if(this.isEmpty()) return -1;
  return this.list[0];
};

/**
* @return {number}
*/
MyCircularDeque.prototype.getRear = function() {
  if(this.isEmpty()) return -1;
  return this.list[this.list.length - 1];
};

/**
* @return {boolean}
*/
MyCircularDeque.prototype.isEmpty = function() {
  return this.list.length === 0;
};

/**
* @return {boolean}
*/
MyCircularDeque.prototype.isFull = function() {
  return this.list.length === this.k;
};

/**
* Your MyCircularDeque object will be instantiated and called as such:
* var obj = new MyCircularDeque(k)
* var param_1 = obj.insertFront(value)
* var param_2 = obj.insertLast(value)
* var param_3 = obj.deleteFront()
* var param_4 = obj.deleteLast()
* var param_5 = obj.getFront()
* var param_6 = obj.getRear()
* var param_7 = obj.isEmpty()
* var param_8 = obj.isFull()
*/