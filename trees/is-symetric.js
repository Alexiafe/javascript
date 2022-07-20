// const root = [1, 2, 2, 3, 4, 4, 3]; // true
const root = [1, 2, 2, null, 3, null, 3]; // false
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
 * @return {boolean}
 */

var helper = function (p, q) {
  if ((p && !q) || (q && !p) || (p && q && p.val != q.val)) return false;
  if (p && q) return helper(p.left, q.right) && helper(p.right, q.left);
  return true;
};

var isSymmetric = function (root) {
  if (!root) return true;
  return helper(root.left, root.right);
};

console.log(isSymmetric(root));
