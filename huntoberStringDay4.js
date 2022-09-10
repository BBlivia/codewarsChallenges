function reverseStr(str){
    let reverseWordArr = str.split(' ').map(word => word.split('').reverse().join('')).reverse()
   return reverseWordArr.join(' ').trimStart()
  }
  