/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let left = [];
    let right = [];
    let prod = [];

    left[0] = right[nums.length-1] = 1

    for(let i = 1; i<nums.length;i++){
        left[i] = nums[i-1] * left[i-1];
    }

    for(let i = nums.length - 2; i >= 0;i--){
        right[i] = nums[i+1] * right[i+1];
    }

    for(let i = 0; i<nums.length;i++){
        prod[i] = right[i] * left[i];
    }

    return prod
};