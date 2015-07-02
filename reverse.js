function reverse(coder){
  return coder.split('').reverse().join().replace(/,/g,'');
  //had to use regular expressions to remove unwanted commas in my reversed string
}