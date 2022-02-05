/*Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

 */

function squareSum(numbers){
    let mapped = numbers.map(el=> Math.pow(el,2))
    return mapped.reduce((result, el)=> result + el,0)
   
    
    
  }
  
  // i will be getting an array of numbers 
  // my task is to take each element in the array  square it and add all the squared values together
  // return the sum 
  // p i could create a sum and make it = 0
  // next im gonna use the map method, im gonna take each element and square it then im gonna reduce it 