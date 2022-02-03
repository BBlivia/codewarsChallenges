/*Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

Hint for R users:

The length of string is not always the same as the number of characters
For example: (Input1, Input2) --> output

("1", "22") --> "1221"
("22", "1") --> "1221"
 */

function solution(a, b){
    let aLength = a.length
    let bLength = b.length
    if(aLength < bLength){
      console.log('a' +'b'+"a")
      return a+b+a
    }else{return b+a+b}
  }
  
  
  // 2 string they can be any data type stingifield 
  // the string can be empty 
  // return a bigger string short long short
  // ' my ', "plant=> 'myplantmy'
  // find the lengths of the two strings 


  function correct(string)
{
	let re =   /"0"/g;
    ///"5"/gi,
           // /"0"/gi,
          
  string.replaceAll(/"0"/g, "O");
  console.log(string)
}

