function solve(arr) {
    //mapping
   return arr.map(sA => new Set(sA).size).reduce((a, c) => a * c, 1)
  
  };
  
  //ill be getting an array of arrays
  // i have to return the number of unique arrays i can create from the original array of array
  