/*In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

More examples in the test cases.

Good luck!

If you like this Kata, please try: */

function repeats(arr){
    let array = []
  // i need to go through the array and filter out the numbers that show up once and add them into a separate array
     arr.filter((item, index)=>{
      if(arr.indexOf(item) === arr.lastIndexOf(item)){
        array.push(item)
      }
    })
     return array[0] + array[1]
  };
  
  // an array of nums ('some repeated 2 show up only onec')
  // I have to return the sum of the two numbers that only show up once
  // 