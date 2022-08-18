/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var deepestLeavesSum = function(root) {
  let array = [root];


  while(true) {
      const next = [];

      array.forEach(node => {
          if(node.left) next.push(node.left);
          if(node.right) next.push(node.right);
      })

      if(!next.length) break;

      array = next;
  }

  return array.reduce((accu, curr) => accu + curr.val, 0)
};