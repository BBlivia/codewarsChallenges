/*Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 */


/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    //create something to hold the array values, and remember them
    // I will assign a varriable to hold the element
    // then im gonna run through the array, and check if the value is in the container 
    // if it already is I woll add +1 to it and if this is the first time i will assign it to one 
    // next I will go through the object and if an element has a value greater than the current container I will make the containe rhold that value and return it then I will assign the propety to majority element  

let cache = {}
let majorityElement;
let majority = 0
for(let numb in nums){
    let num = nums[numb]
    if(cache[num]){
       cache[num]++
    }else{
        cache[num] = 1
    }
    
}
for(let num in cache){
    if(cache[num] > majority){
        majority = cache[num]
        majorityElement = num
    }
  
}

    return majorityElement

};


// I will be getting an array of numbers,
// I have to return the number that appears the most in the array 
// ex=> [2, 3, 2] => 2
