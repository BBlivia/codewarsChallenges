/* 
JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]
*/




function getEvenNumbers(numbersArray){
  
    let filtered = numbersArray.filter(number => number % 2 == 0)
    return filtered
    }
    
    // I am gonna get an array of intergers 
    // I have to return only the even numbers in the array 
    // I will be going through the array and checking if each number is even
    // I know a number is even if you get 0 when ud ivide by 2