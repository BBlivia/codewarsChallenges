/*Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455. */


function sumTwoSmallestNumbers(numbers) {  
    // i could sort them and add the first two index
    let newArr = numbers.sort((a, b) => a -b)
   return newArr[0] + newArr[1]
  }
  
  // i am goning to take in an array of positive numbers, will 0 be inlcuded, 
  // I have to return the sum of the two lowest numbers in the array
  // ex: [2, 5, 9 , 10] => 2 + 5 = 7
  //