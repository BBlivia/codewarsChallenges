// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

//P.S. Each array includes only integer numbers. Output is a number too.






function arrayPlusArray(arr1, arr2) {
    let first = arr1.reduce((total, current) => total + current)
    let second =  arr2.reduce((total, current) => total + current)
    return first + second; //something went wrong
    
  }
  
  // give me two arrays
  // i have to sum them together 
  // reduce 1 
  // reduce 2 
  // 1 + 2
