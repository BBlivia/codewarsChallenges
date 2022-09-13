/*Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

Example:

solution(5) // should return "Value is 00005"
*/


function solution(value){
    return "Value is " + (" 0000" + value).slice(-5);
  }
  
  
  
  /* am gonna get a value input 
    - is this value gonna a negative number? a float? will it only be intergers?
    im gonna return a string "Value is +padded value with 0leadding it"
    
    i am gonna create the string "Value is "
    take the value and string it, store it into a variable 
    if the length of my variable is not 5 then i will add a 0 to the from and repeat until lenfth is 5
   once the string variable has a length of five I will join it to my initial string  
    
*/  