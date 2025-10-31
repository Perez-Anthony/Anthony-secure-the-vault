let code1 = undefined;
code1 = 7 + 3;

let code2 = ( 90 - 50 ) / 1 ;

let code3 = 80 % 41;

let message = "The vault has been secured. The combination is:";

let codeA = code1 + "-" + code2 + "-" + code3 ;

let codeB = `${code1}-${code2}-${code3}`

console.log(message, codeA, codeB)