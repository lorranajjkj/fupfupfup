let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let inicio = +input();
let fim = +input();

for (let i = inicio; i <= fim; i += 1){
  if (i % 5 == 0 && i % 3 == 0){
    write('zigzag');
  } else if (i % 3 == 0){
    write("zig");
  } else if (i % 5 == 0){
    write("zag");
  } else {
    write(i);
  }
}