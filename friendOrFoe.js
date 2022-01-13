/*Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

*/


function friend(friends){
    let newArr =[]
  for(let i = 0; i<friends.length; i++){
    if( friends[i].length == 4){
      newArr.push(friends[i])}
  }return newArr
  }
  
  // i will be getting an array of strings, that will be my friends name
  // i have to return a an array with strings that have a length of 3
  // ['lily', 'heaven', 'cass', 'montana'] = ['lily', 'cass']
  // create an empty arraay 
  // filter through the array
  // i will be taking a note of the array element (name) array[i].length -1 === 4 push it into 
  // the array 
