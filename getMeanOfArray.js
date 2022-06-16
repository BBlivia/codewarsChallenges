/* It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
Return the average of the given array rounded down to its nearest integer.
The array will never be empty.
*/





function getAverage(marks){
    let total = marks.reduce((total, current)=> total + current)
    return Math.floor((total / marks.length))
  }
  
  
  // given an array of intergers 
  // i need to return the average rounded down 
  // no negative numbers 
  // first i need to loop through the array and add them numbers to find the total
  // next i need to divide that by the array length -1

