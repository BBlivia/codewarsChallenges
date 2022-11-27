const removeConsecutiveDuplicates = s =>{
    let  arr = s.split(' ')
      let result = arr.filter((word, index, arr) => word !== arr[index + 1]).join(' ')
      return result 
    } 
    
    // im gonna get a string of words,
    /* my have to return anther string of words, whcih consists of none consecutive (not next to each other)
    words,
    will i get atleast 1 word,
    // no comma separated, no puntuation 
    ex: apple cheese cheese bread juice water water water apple juice = > apple chesse bread juce water apple juice 
    
    
    
    */