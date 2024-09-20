let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let dias = +input();
let total = 0;

for (let i = 0; i < dias; i += 1){
  let calorias = +input();
  total += calorias;
}
