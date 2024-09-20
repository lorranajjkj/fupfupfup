let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let a = +input()
let b = +input()
let resultado;

while(true){
  resultado = a + b
  if (a % 2 === 0 && b % 2 === 0){
    write(resultado)
  }
  if (a > b){
    break;
  }

} 


