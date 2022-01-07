var countSheep = function (num){
    let str = '';
    if(num === 0){
      return ''
    }else{
    for(let i =1; i<= num; i++){
     str += i + ' ' + 'sheep...'
    } return str
  }
  }
  // i will be getting a num 
  // i need ot return a string that counts sheep up until that number
  // 2 => '1 sheep...2sheep...'
  // i need to create an empty string
  // i will loop through to the number
  // for each i i need to repeat the string into one big string 