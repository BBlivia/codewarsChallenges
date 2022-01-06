function bmi(weight, height) {
    let bmiNum = weight/Math.pow(height,2)
    if(bmiNum <= 18.5){
      return 'Underweight'
    }else if(bmiNum <= 25.0){
      return 'Normal'
    }else if(bmiNum <= 30.0){
      return 'Overweight'
    }else{
      return 'Obese'
    }
  
  }