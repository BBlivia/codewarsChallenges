/*Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

 */


const quarterOf = (month) => {
    if (month <=3){
      return 1
    }else if(month >3 && month<=6 ){
      return 2
    }else if(month >6 && month <=9){
      return 3
    }else {
      return 4
    }
  }
  
  // i will be getting a month jan-dec(1-12) as intergers
  // my job is to return back the querter (interger) that said month belongs to
  // ex= 8 = 3 
  // then i will use the array.includes
  // if it's true return said array else go to the next one 