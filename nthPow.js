/*This kata is from check py.checkio.org

You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

Let's look at a few examples:

array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

*/

const index = (array, n)=> array.length > n ? Math.pow(array[n], n): -1
  
// i will be getting an arrya and a number
// my task is to take number and atch it with number in it's position and return the numbr 
// if it's not thre return -1
//ex [2, 1, 4, 3 5], 3 = 27

// i need to iterate through the array takig the position, to see if it matches n 
// if it matches I wanted to take element in said position and return it to n
// if it's not return -1 
