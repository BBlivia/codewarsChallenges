//this takes the string and dobules each character in string 


/* Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!

 */


function doubleChar(str) {
    // i need to take run through the string and double it 
     let newStr = ""
     for(let i = 0; i<str.length; i++){
       newStr += str[i]  + str[i]
     }
     return newStr 
   }
   
   
   // i am supposed to double the letters in the string
   // i need to return a string 