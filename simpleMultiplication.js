//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    return  number % 2 == 0? number * 8: number *9
  }
  
  
  // i will be getting a number
  // can numbers be floated or negative, can i get zero 
  // i return the sum of said multipied by 8 or 9 depending on if it's even or not
  //// i have to take number and see if it's even or odd
  // i do this by seeing the remainder if it's 0 it's even and 1 will be odd 
  // next i will do a conditional 