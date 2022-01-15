/*A hero is on his way to the castle to complete his mission. However, 
he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, 
our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets 
and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :)

 */


function hero(bullets, dragons){
    return bullets > 2 * dragons || bullets === 2 * dragons? true:false
    }
    
    
    // i am going to get bullets and dragons to fight
    //- will i ever get a negative number,
    //- will i ever get a 0 value of one of the numbers?
    // I need to rrutn true or false depending  on if the ratio of dragons to bullets will allow for the hero to live
    // 10 - 6 dragons = false
    // i will need to check to see if the number of bullets is atleast twice the number of drgons
    // if it is then true he can live and move on
    // if it isnt then no 