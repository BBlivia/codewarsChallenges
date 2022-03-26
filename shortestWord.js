//Simple, given a string of words, return the length of the shortest word(s).

//String will never be empty and you do not need to account for different data types.






function findShort(s){
    let dividedWords =  s.split(' ') // i need to split the string by words
    let shortestLength = dividedWords[0].length
    // i will get an array back
        // go into the array and count each word 
    for(let i=0; i<dividedWords.length; i++){
      if(dividedWords[i].length < shortestLength){
         shortestLength = dividedWords[i].length
      }
    
    }
    return shortestLength
    //taking note of the length and comparing it to shortestLength
    
    
      
    }
    
    //p a sting of words 
    //R return the length of the shotest word 
    //E ' hello, im Olivia ' = 2 
    //P let dividedWords = s.split(' ')
    // i need to split the string by words
    // i will get an array back
    // go into the array and count each word 
    //taking note of the length and comparing it as I go