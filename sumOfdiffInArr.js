function sumOfDifferences(arr) {
    let sorted = arr.sort((a, b) => b - a)
    if(arr.length  == 0 || arr.length == 1){
      return 0
    }else  return sorted[0] - sorted[sorted.length - 1]
   
    console.log(sorted)
    
  }
  
  
  //I will be getting an array of numbers 
  // I have to sum the differnce and return said number 
  //I need to have the numbers go from largest to smallest 
  // then I need to go through the array and subtracking the items from the one begind it
  // I need to be adding those together and then bring back the final answer