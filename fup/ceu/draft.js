let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let pedra = +input();
write("[ ", "");
for (let i = 0; i < 10; i += 1){
  if (i != pedra){
    write(i, " ");
  }
}
if (pedra != 10){
  write("ceu ", "");
}
write("]");