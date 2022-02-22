/*Given a number as an input, print out every integer from 1 to that number. 
However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, 
print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.*/


// I wil be gettung a number, I have to print out 1 -n, i have to check if the number is divisiable by 3 , 3 and [3,5]
// 3 = Fizz
//5 = Buzz
//3, 5 = Fizz Buzz
// and print out different strings based on if it's else print numbber 
// will the number be floats, an empty number, will the number ever be zeo, 

/*
    n = 15
    1,
    2
    Fizz
    4
    Buzz
    Fizz
    7
    8
    Fizz
    Buzz
    11
    Fizz
    13
    14
    Fizz Buzz


*/


function fizzbuzz(n){
    //create a for loop 1-n
    for(let i = 1; i<=n; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log('Fizz Buzz')
        }else if( i % 3 == 0){
            console.log('Fizz')
        }else if( i % 5 == 0){
            console.log('Buzz')
        }else{  console.log( i)}
    }   
  
}

console.log(fizzbuzz(20))