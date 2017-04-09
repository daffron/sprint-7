function min (x, y){
  return Math.min(x, y);

};
console.log(min(0, 10));
console.log(min(0, -10));


function isEven (num){
  if (num % 2 === 0){
    return true;
  }
  else {
    return false;
  }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-2));

function countBs (string){
  var count = 0;
  for (i = 0; i < string.length; i++){
    if (string.charAt(i) === "B"){
      count ++;
    }
  }
  return count;
}

console.log(countBs("BBC"));

function countChar(string, letter){
  var count = 0;
  for (i = 0; i <string.length; i++){
    if (string.charAt(i) === letter){
      count++;
    }
  }
  return count;
}

console.log(countChar("kakkerlak", "k"));
