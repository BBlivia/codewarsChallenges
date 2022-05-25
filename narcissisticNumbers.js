/*A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.

Ex: 153, where l = 3 ( the number of digits in 153 )
13 + 53 + 33 = 153

Write a function that, given n, returns whether or not n is a Narcissistic Number.

*/







function isNarcissistic(n) {
    let numsAlone = n.toString().split('')
    console.log(numsAlone)
     let numsLength = numsAlone.length
      console.log(numsLength)
   let output = numsAlone.map(e  =>  (+e) ** numsLength)                  
    console.log(typeof output)
    console.log(output)
    let sum = output.reduce((a,b)=> a +b)
    console.log(sum)
    if (sum == n ){
      return true
    }else{
     return false 
    }
      
  }
  
  // get the numbers by themselves 
  // get length of orginal number 
  // take index  * length number 
  // add it all together if it equals orginal number 
  // true 
  //false 

  
  //checks if a number is able to be multiplied by numbers that make up a input 