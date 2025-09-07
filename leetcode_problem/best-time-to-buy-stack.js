function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];  // Track the minimum price so far
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;  // Calculate profit if sold today
        }
    }

    return maxProfit;
}
consple.log("rathod");
