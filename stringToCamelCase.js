/*Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

 */



function toCamelCase(str){
  
    let newStr = str.replace(/[^a-zA-Z0-9]/g, ' ')
    let finalStr = ''
    let arr = newStr.split(' ').map((el, index)=>{
      if(index === 0){
        finalStr = el;
        console.log(finalStr)
        
      }else{
        finalStr += el[0].toUpperCase('') + el.slice(1);
      }
    })
    
   return finalStr
  }


  //another one without regex
  /*function toCamelCase(str){ 
  let arr = str.split('');
 // console.log(arr)
  for(i = 0; i < arr.length; i++){
    let letter = arr[i];
   // console.log(letter)
    if(letter == '_' || letter == '-') {
      arr[i + 1] = arr[i + 1].toUpperCase();
      console.log(arr[i + 1])
      arr[i] = '';
    } 
  }
   arr.join('');
}
 */