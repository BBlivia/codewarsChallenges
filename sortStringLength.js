function sortByLength (array) {
    return array.sort((a, b) => a.length - b.length )
    };
    
    // i wil be getting an input which wil be an array varius strings lengths
    // i have to return an array of the same strings sorted in order from shortest to longest
    //
    // i create something to store the sorted array of strings inside 
    // i need to walk through the array and count each string length, and i also need to take note of said element length
    // return the sorted lengths 