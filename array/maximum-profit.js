// const prices = [7, 1, 5, 3, 6, 4]; // result 7
// const prices = [1, 2, 3, 4, 5]; // result 4
const prices = [7, 6, 4, 3, 1]; // result 0

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let p = 0;
  let stock = false;
  for (let i = 0; i < prices.length; i++) {
    if (!stock && prices[i] < prices[i + 1]) {
      p = p - prices[i];
      stock = true;
    } else if (stock && (prices[i] > prices[i + 1] || i == prices.length - 1)) {
      p = p + prices[i];
      stock = false;
    }
  }
  return p;
};

console.log(maxProfit(prices));
