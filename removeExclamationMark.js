function removeExclamationMarks(s) {
    let arr = s.split('')
     let str = []
     for( let i = 0; i<arr.length; i++){
       if( arr[i] !== '!'){
         str.push(arr[i])
       }
     }
     return str.join('');
   }