// const root = [2, 1, 3]; // true
const root = [5, 1, 4, null, null, 3, 6]; // false

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
var validate = function (root, low, hight) {
  if (root == null) return true;

  if (
    (low != null && root.val <= low) ||
    (hight != null && root.val >= hight)
  ) {
    return false;
  }
  return (
    validate(root.right, root.val, hight) && validate(root.left, low, root.val)
  );
};

var isValidBST = function (root) {
  return validate(root, null, null);
};

console.log(isValidBST(root, null, null));
