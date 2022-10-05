function bonusTime(salary, bonus) {
    let str = ``
    if(bonus === true){
      salary = salary * 10
    } else{
      salary = salary
    }
      return `£${salary}`
    }
    
    // I will be getting 2 parameters one is a interger (salary) and the other boolean (bonus)
    // I need to pass in the salary and the bonus and return the salary * 10 followed by E
    // alsoe just return the slary I will be returninga string of the salray
    // ex: 
    // I am getting a number and a true or false param
    // if the bonus param = salary * 10
    // if the bonus param = false = salary 
    // return the final salary = '"£"' + salary 