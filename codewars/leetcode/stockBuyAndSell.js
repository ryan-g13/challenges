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
    value: -1
  }  
  let sellPoint = {
    index: 0,
    value: -1
  }

  
  if(prices.length < 2) { return 0;}
  prices.forEach((day, index) => {
    if(index === 0) {
      buyPoint.value = day;
      console.log(buyPoint);
    }
    if(day < buyPoint.value && index !== prices.length - 1) {
      buyPoint.index = index;
      buyPoint.value = day;
      console.log('setting new buy point', buyPoint);
    } else if(day >= buyPoint.value && index > buyPoint.index && day >= sellPoint.value) {
      sellPoint.index = index;
      sellPoint.value = day;
      console.log('setting sell point', sellPoint);
    }
  })
  if(sellPoint.index < buyPoint.index) {return 0;}
  else {
    console.log(sellPoint.value - buyPoint.value);
    return sellPoint.value - buyPoint.value;
  }
};

// let input = [7,1,5,3,6,4];
let input = [2,1];
maxProfit(input);