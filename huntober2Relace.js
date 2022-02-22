// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet
// Use replace on the parts of the url you want gone. You can replace with an empty string ''. Then split the string using . as the seperator and take the first part [0]


// im going to get a url, you want me to return the "domain" name as a "string"
// will the domain name contain numbers, will i ever get an empty url, 
/*
  "http://github.com/carbonfive/raygun" => 'github'
  "http://facebook.com/carbonfive/raygun" => 'facebook'
  "http://www.twitter.com/carbonfive/raygun" => 'twitter'
*/

function domainString(url){
    //replace www, .com
  let newUrl=  url.replace('http://www.', '').replace('http://', '').split('.')
    return newUrl[0]
  }
  
  console.log(domainString("http://github.com/carbonfive/raygun"))
  console.log(domainString("http://www.twitter.com/carbonfive/raygun"))
  console.log(domainString("http://www.zombie-bites.com"))