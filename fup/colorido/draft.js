let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let pedra = +input();
let pe = input();

write("[ ", "");
for(let i = 0; i <= 10; i+= 1){
  if (i != pedra){
    if (i === 10){
      write("ceu", " ");
    } else {
      write(i + pe, " ");
    }
    pe = (pe === "d" ? "e" : "d");
  }
}
write("]");