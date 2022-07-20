const root = [3, 9, 20, null, null, 15, 7]; // 3
// const root = [1, null, 2]; // 2

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
var maxDepth = function (root) {
  return !root ? 0 : 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

console.log(maxDepth(root));
