function evenNumbers(array, number) {
    let arr = []
    
    for(let i of array){
      if(i % 2 === 0 ){
        arr.push(i)
      }
    }
      return arr.slice(-number)
    }
    
    
    // i will be getting an array of numbers 
    // i have to return a new array that is number length, and filled with the last number length of 
    // of even numbers 