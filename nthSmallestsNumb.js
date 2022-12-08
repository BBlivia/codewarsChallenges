/*Given an array/list of integers, find the Nth smallest element in the array.

Notes
Array/list size is at least 3.
Array/list's numbers could be a mixture of positives , negatives and zeros.
Repetition in array/list's numbers could occur, so don't remove duplications.
Input >> Output Examples
arr=[3,1,2]            n=2    ==> return 2 
arr=[15,20,7,10,4,3]   n=3    ==> return 7 
arr=[2,169,13,-5,0,-1] n=4    ==> return 2 
arr=[2,1,3,3,1,2],     n=3    ==> return 2  */

function nthSmallest(arr, pos){
    // im gonna have to sort these and put them in order from smallest to greatest
     let sorted =  arr.sort((a, b) => a - b)
    return sorted[pos - 1]
    }
    
    
    // I will be getting an arry and a position,
    // I have to return the number that is in that position
    // mixture of nums -, + , 0, no floated numbers, and no
    // ex: [ 2, 0, -4, 0, 1], 3 => 1
    // 