function removeChar(str){
    let arr = str.split('');
     arr.shift()
     arr.pop()
     console.log(arr)
   return arr.join('')
   
   };
   
   
   //i will be given a string
   // i have to return said string with the first and last character missing
     //will those string have number or will it only be words
     //wil the string be more than one word 
     // will it have puntuation and does the puntuation count as a character 
   // ex: 'engineer' = nginee
   // im gonna split turn it into an array then im gonna use shift and pop
   // next im gonna join them back into a string 