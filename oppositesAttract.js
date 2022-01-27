/*
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. 
If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

*/


function lovefunc(flower1, flower2){
    return flower1 % 2 == flower2 % 2? false: true
    }
    
    
    // i will be getting 2 flowers, whcih will have a number data type
    // the numbers will be 0 or greater and will be intergers 
    // i haave to take both flowers (numbers) if f1 and f2 cannot both be odd or even for them to be in love 
    // if they are different i will return true else 
    // 2, 4 = false
    //5, 4 = true 
    // 4, 3 = false
    // 4, 6 = false 
    // i will take both aarguments f1 and f2 check if they are even by setting remainder 2
    // if i get back 0 it's even else false
    // if f1 and f1 % == 