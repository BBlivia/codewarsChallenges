function litres(time) {
    let hydrate = Math.floor(time * 0.5)
    return hydrate;
  }
  
  // i will be given a time in hours
  // i need to return the amount of liters needed per said house for peak hydration rounded to smallest value
  
  // will i be getting a time in which the answer will be zero?
  // will i be getting a time in which he doesnt go anywhere 
  // 3 == 1
  // 1 hr = 0.5
  // i need to times the hours by liters time* 0.5
  // wrap in a Math.floor(hours.0.5)