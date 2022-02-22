function sumMix(x){
    // get a new array tha's all numbers
    let newArray = x.map(num => Number(num))
    let sum = newArray.reduce((total, current)=> total + current, 0)
    return sum
  // turn everything into a number 
    // i need go through the array and add up all the elements
  }
  
  //Ill be getting an array, of numbers, they will be numbers and strings  [2, '2', '1']
  // i need to return the sum of these numbers 
  // empty array nAn, negative or floated numbers
  //[2, '2', '3,', 2] => 9
  //