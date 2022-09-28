//Return the number (count) of vowels in the given string.

//We will consider a, e, i, o, u as vowels for this Kata (but not y).

//The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
    let vowelCount = 0;
    let vowels = 'aeiou'
   for (let i = 0; i<str.length; i++){
     for( let j = 0; j<vowels.length; j++){
       if( str[i] === vowels[j]){
         vowelCount += 1
       }
     }
   }
    return vowelCount
  }
  
  
  // i will get a strng, of lower case letters and spaces,
  // i need to return the number of vowel (not y) that are in the string
  // ex: 'i am excited ' => 5
  // create a space to store the vowel count 
  // next i will create something to indicate the vowels 
  // next I will go through the string and compare if string letters with the letters in the vowels string 
  // if theres a match the count will add 1 else move on to the next letter
  // return the final count