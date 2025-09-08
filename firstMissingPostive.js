function firstMissingPostive(nums){
    let n = nums.length;

    //place each number in its correct index postion
 for(let i = 0; i<n; i++){
    while(nums[i] > 0 && nums[i]<=n &&nums[nums[i]-1] !== nums[i] ){
    //swap to correct position
    let temp = nums[i];
    nums[i]= nums[temp-1];
    nums [temp-1] =temp;
    }
 }
 for(let i =0; i<n ; i++){
    if(nums[i] !== i+1){
        return i+1;buy
    }
 }
 return n+1;
}

let result = firstMissingPostive([1,2,3,5,3,-2,5]);
console.log(result);