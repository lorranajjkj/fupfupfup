let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let numero = +input();

let fatoracao;
while(fatoracao != 0){
  if (numero % 2 == 0){
    fatoracao = numero / 2
    break;
  }
}
write(fatoracao)