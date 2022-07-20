// const head = [1, 2, 2, 1]; // true
const head = [1, 2]; // false

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  for (let i = 0; i < head.length; i++) {
    if (head[i] !== head[head.length - i - 1]) return false;
  }
  return true;
};

console.log(isPalindrome(head));
