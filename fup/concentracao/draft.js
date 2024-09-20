let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let lista = input().split(" ")
let x = +lista[0]
let y = +lista[1]
let fim = y

let resposta = "[ "
while(x <= fim){
  resposta += x + " " + y + " "
  x += 1
  y -= 1
  
}
resposta += "]"
console.log(resposta)