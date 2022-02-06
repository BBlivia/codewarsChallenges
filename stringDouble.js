//remove double string characters that are adjacent to each other.


function doubles(s){
    let newStr = [s[0]]
    for(let i =1; i <s.length; i++){
      if( s[i] != newStr[newStr.length -1]){
        newStr.push(s[i])
      }else{
        newStr.pop()
      }
       
    }
       return newStr.join('')
    }
  
  
  
  
  
  // i will be getting a string, that consists of double letters 
  // i need to return another string with the double letters taken out if they are next to each other 
  // p- create a new empty string that I will store the new string in
  // i need to interate inside of the string that I was given 
  // check if character is the same if it's the same remove it
  // else push it to the new string 