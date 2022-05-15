/* Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Notes
The input array will always contain only positive numbers, and will never be empty or null.

*/

function squareOrSquareRoot(array) {
    let final = array.map((e)=> Math.sqrt(e) % 1 === 0? Math.pow(e, 0.5) : Math.pow(e, 2)
       )
     // go through the array
     // check if it has square root
     // if it does return that number 
     // if it doesnt then square it
     // return new array 
     return final
    
   }
   
   // im gonna get an array of intergers
   // we need to return an array of inters as well
   // look at each index and check if it has a  square root if it is return it, if it doesnt square it 
   