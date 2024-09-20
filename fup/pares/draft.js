let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

a = +input();
b = +input();

if (a > b){
  write("invalido");
}

let soma = 0;
for (i = a; i > b; i += 1){
  if (i % 2 == 0){
    soma += i;
  }
}

write(soma);
