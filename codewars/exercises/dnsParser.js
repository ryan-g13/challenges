/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"

*/

function domainName(url){
  let ansStr = '';
  if(url.includes('https://')) {
    url = url.slice(8);
    console.log(url);
  } 
  if(url.includes('http://')) {
    url = url.slice(7);
    console.log(url);
  } 
  if(url.includes('www.')) {
    url = url.slice(4);
    console.log(url);
  }
  let cut = url.indexOf('.');
  ansStr = url.slice(0, cut);
  console.log(ansStr);
  return ansStr;
}

domainName('http://www.google.com');
domainName('http://canada.ca');