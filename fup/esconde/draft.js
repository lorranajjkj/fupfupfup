let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let contagem = +input();

for (x = 1; x <= contagem; x += 2){
  write(x);
}

for (y = contagem - 1; y >= 0; y -= 2){
  write(y);
  
}
