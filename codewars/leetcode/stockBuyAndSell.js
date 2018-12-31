/* 
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.

Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.

*/

var maxProfit = function(prices) {
  let buyPoint = {
    index: 0,
    value: 999999999
  }  
  let ans = 0;
  
  if(prices.length < 2) { 
    return 0;
  }

  prices.forEach((day, index) => {
    let profit = 0;
    if(day < buyPoint.value) {
      buyPoint.index = index;
      buyPoint.value = day;
      console.log('setting new buy point', buyPoint);
    } else {
      profit = day - buyPoint.value;
      if (profit >= ans) {
        ans = profit;
      }
    }
  })
  console.log(ans);
  return ans;
};

let input = [7,1,5,3,6,4];
// let input = [2,1];

// Alternate solution is faster with a for loop... 
// var maxProfit = function(prices) {
//   let lowestPrice = null;
//   let highestProfit = null;
  
//   prices.forEach(value => {
//       let currentPrice = value;
//       let profit = 0;
  
//       if (lowestPrice === null || currentPrice < lowestPrice) {
//           lowestPrice = currentPrice;
//       }
      
//       profit = currentPrice - lowestPrice;
      
//       if (highestProfit === null || profit > highestProfit) {
//           highestProfit = profit;
//       }
//   })
//   console.log((highestProfit > 0) ? highestProfit : 0)
//   return (highestProfit > 0) ? highestProfit : 0;
// };

// let input = [2,1,2,0,1]
// maxProfit(input);
