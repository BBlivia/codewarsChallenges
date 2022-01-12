/*In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

 */


function findMultiples(integer, limit) {
let arr = []
for(let i = integer; i<=limit ; i++ ){
  if(i % integer == 0){
  arr.push(i)
  }
}return arr
}

// i will be getting 2 values (interger, limit), the limit > interger, i will only have +number not 0
// - will i get floats,
// will i ever get the same number 
// what about prime number, will i ever need to return an empty array
// i will need to return the multiples of interger up to limit as an array of answers 
// ex: (4, 10) [4, 8]

// i will iterate through through the limit and set my starting value at interger varible 
// next i will check to see if each number is able to be divisable by the interger by seeting 
// the modules and making it zero, if it does i wll push it into an array
