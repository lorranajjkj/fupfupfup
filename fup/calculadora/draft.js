let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let n1 = +input();
let n2 = +input();
let op = input();

if (op === '+') {
  let soma = n1 + n2;
  console.log(soma); 
}
 else if (op === '-') {
  let subtracao = n1 - n2;
  console.log(subtracao);
}
else if (op === '*') {
  let multi = n1 * n2
  console.log(multi);
} 
else {
  let divisao = n1 / n2;
  console.log(Math.floor(divisao));
}