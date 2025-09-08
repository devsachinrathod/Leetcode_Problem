public class Solution {
    public static void main(String[] args) {
        int prices[] = {7, 1, 5, 3, 6, 4};
        System.out.println(maxProfit(prices));
    }

    public static int maxProfit(int[] prices) {
        int maxProfit = 0;
        int n = prices.length;
        int buyPrice = prices[0];

        for (int i = 1; i < n; i++) {
            int currentProfit = prices[i] - buyPrice;

            if (currentProfit > maxProfit) {
                maxProfit = currentProfit;
            }

            if (prices[i] < buyPrice) {
                buyPrice = prices[i];
            }
        }

        return maxProfit;
    }
}
