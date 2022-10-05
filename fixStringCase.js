/*In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase. */


function solve(s){
    let upper = 0
    let lower = 0
  
    for( let i = 0; i <s.length; i++){
    if( s[i] == s[i].toLowerCase()){
     
        lower ++
      }else{
        upper ++ 
      }   
     // console.log(lower)
     console.log(upper)
    
  }
    return lower >= upper? s.toLowerCase(): s.toUpperCase()
  }
  
  
  
  
  // i wil be getting a string input 
  // i have to return the string either lower case or uppercase depeding on the cases
  //
  // i will crete something to store the numeber of lower case letters and the. upper case letters
  // next I will go through the strings and take note of each case
  // i will then say if stirng i are mostly lower case or equal turn string into lower cse
  // or turn stirng into upper case 