/*You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

Note
consecutive strings : follow one after another without an interruption

 */





function longestConsec(strarr, k) {
    let longest = '';
  for(let i = 0; k>0 && i<=strarr.length-k; i++){
    let tempStrArr = strarr.slice(i, i+k)
    let concatStr= tempStrArr.join('')
    if( concatStr.length > longest.length){
     longest = concatStr 
    }
  }
  return longest
}




// im gonna get 2 inputs, one is gonna be a array of strings and the second is a inter
// i have to return the first longest string that can be made by coming consecutive strings of k
// k = 3 i will combine 3 strings in a row and return the firs tlongest 
// if k =0 or k> the string length or k is a negative number bring back an empty string

// fist identify k -ill know how much i should concatonate the strings
//next I need to create a space to put the longest string in
// i need to go through the array, and note wht hapens with k at it's various states
// while i go through the array i need to be concatonating the consecutive strings and storing their length
// i can do this by creating a space to store each string and the ones that come after it using based on value of k
// and then creating a space to store the concatonated strings as I go 
// i need to identify the string with the highest length, by comparing it to each string that I store 
// next I need to bring back the first time (concationation) of that lenth by returning that string

// will take each element.concatonate[strrarr].[i] + i + k 