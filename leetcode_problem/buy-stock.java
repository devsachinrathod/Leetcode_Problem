Public static void main(String[] args){
    int prices[] = {7,1,5,3,6,4};
    System.out.println(max_Profits(prices));
}
Public static int maxProfit(int prices[]){
    int max_Profits = 0;
    int n = prices.length;
    int buy_price = prices[0];
    
    for(int i=1; i<n; i++){
        int current_profit = prices[i] - buy_price;
        if(current_profit > max_Profits)
        {
            max_Profits = current_profit;
        }
        if(prices[i] < buy_price)
        {
             buy_price = prices[i];
        }
    }
    return max_Profits
}
