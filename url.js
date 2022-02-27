// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet


//get a url, return domain name as string
// will i get an empty url, a value other than a string,
// http://facebook.com/this/issomething

function domanName(url){
    // i need to isolate the domain name, splitting it between the '/'
   console.log(url.split('/'))
    // i
}

console.log(domanName("http://github.com/carbonfive/raygun"))