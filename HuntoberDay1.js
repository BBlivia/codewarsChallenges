/*This week we will be discovering hidden messages by manipulating a given string. Your solutions should account for any non-empty string. On Friday we'll combine our functions to decode a message.

Oh no! How did this happen?! Somehow similar-looking numbers and letters have been confused in our document. Someone may have been messing around writing naughty words on a calculator. We need to get them back to normal.

Below, find the mix-ups that have been made. Note: the confusion happened in both directions and was case-sensitive.


'0' <-> 'O'      '5' <-> 'S'
'1' <-> 'I'      '6' <-> 'G'
'2' <-> 'Z'      '7' <-> 'L'
'3' <-> 'E'      '8' <-> 'B'
'4' <-> 'h'      '9' <-> 'q'


 */


function replace (str){
    const decodeChar ={
      '0' : 'O',  'O' : '0', 
      '1' : 'I',  'I' : '1', 
      '2' : 'Z',  'Z' : '2',
      '3' : 'E',  'E' : '3', 
      '4' : 'h',  'h' : '4',
      '5' : 'S',  'S' : '5',
      '6' : 'G',  'G' : '6',
      '7' : 'L',  'L' : '7',
      '8' : 'B',  'B' : '8',
      '9' : 'q',  'q' : '9',
    }
     
    return [...str].map(char => decodeChar[char] ? decodeChar[char] : char).join('')
  }