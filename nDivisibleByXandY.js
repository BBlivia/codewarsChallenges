/*Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible b
*/

function isDivisible(n, x, y) {
    return n % x == 0 && n % y ==0? true: false
   }
   
   
   // i will be getting 3 variables i have to determine if n is divisalbe by x and y 
   // return true if it's divisiable by both and false if only 1 or non
   // i am going to use and && i will do an if sttement and taking the modules and == 0 for both