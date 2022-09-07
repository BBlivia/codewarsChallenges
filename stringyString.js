/*write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.*/


function stringy(size) {
    let str = '';
    for(let i = 1; i<=size; i++){
      if (i % 2 === 1){
        str = str + '1'
         console.log(str)
      }else{
        str += '0'
       
      }
    }
    return str
  }
  
  
  // i will be getting an input which is a number, can i get zero as a number
  // I be returning a string repeating 10 upuntil i get to the input number
  //ex: 5 => 10101
  // I will need to create something that i can store my string 
  // I will need to go thorugh the number from 1 up until i get to the size amount
  // if a number is odd add a 1
  //if a number is even add 0 
  // i will need to return the string 