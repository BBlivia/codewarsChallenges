/*Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5 */

public class KeepHydrated {
    
    public int Liters(double time){
     int liter = (int) (time * 0.5);
      System.out.println(liter);
    return liter;
     
    }
    
  }
  
  // I will be getting a double time => I hve to return a interger of how many liters will be drunken with the time I am given
  //time double => int liter rounded down to the smallest value
  // ex: 2.5 hr => 2.5(1.25) => 1 liter 
  // write an function for the liter  1 => 0.5
  // time * liter
  
  