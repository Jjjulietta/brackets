module.exports = function check(str, bracketsConfig) {
  let bracketsPair = {};
let openBrackets = [];
for(let item of bracketsConfig) {
bracketsPair[item[0]] = item[1];
openBrackets.push(item[0]);
}
console.log(openBrackets);
console.log(bracketsPair);
let stack = [];
for(let i = 0; i < str.length; i++) {
let cur = str[i]; console.log(cur); 
if(openBrackets.includes(str[i]) && bracketsPair[cur] === cur) {if(stack[stack.length-1] === cur) {stack.pop()} else{stack.push(cur)}}
else if(openBrackets.includes(str[i]) && bracketsPair[cur] != cur) {
stack.push(cur);}
 else{ if(stack.length === 0) {return false}
let el = stack[stack.length-1]; console.log(el); console.log(stack); console.log(bracketsPair[el]);
if(bracketsPair[el] === cur) {
stack.pop()} else { return false}}}
return stack.length === 0;
    
  // your solution
}
