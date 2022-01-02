function abbrevName(name){
    let str = ' ';
    let first = name.split(' ')[0][0].toUpperCase()
    let second = name.split(' ')[1][0].toUpperCase()
    
    str = `${first}.${second}`
    return str
    
    }
    
    // i am going to get 2 words with a space between them
    // i need to bring back the first inital in both words, capitalized with dot inbetween them
    // the return also needs to be strings
    //liv tiwi => "L.T"
    // first I will need to single out the two letters, 
    // next I need to capitalize them
    // next I will put them into one string with a '.' separating them
    // I will return the new string