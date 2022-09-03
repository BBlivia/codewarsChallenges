function isPalindrome(line) {
  
    //let sr =  string(line)
     return (line.toString()==line.toString().split('').reverse().join(''))
    
   }
   
   // i will be getting a line, that can come in the form of a string, or number
   // I have to return true if said line is the same backward and forward else false 
   // ex: 12321 = true
   //ex: 'summer'= false
   // i have to crete something to store the numbered string 
   // i have to check if the line is the line reversed