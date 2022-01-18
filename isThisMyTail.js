/* some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

If the tail is right return true, else return false.

The arguments will always be non empty strings, and normal letters.

*/

function correctTail(body, tail ){
  
    sub = body.substring(body.length -1)
      if(sub == tail){
        return true
      }else{
        return false
      }
    
  }
  
  
  // I am going to get two arguments the first is the body, the second represents the tail
  // not be empty and only stirngs and normal lettters 
  //i need to create a funtion that tells me if the lasst letter of the body matches the second 
  // argument
  // if it does return truel selse false 
  // i can iterate through the string, use the charactr at == tail 
    
  