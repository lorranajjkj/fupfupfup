let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

function calcular_media(n1: number, n2: number){
  let media = n1 + n2 / 2
  return media
}

console.log("A media dos numeros é:" calcular_media(4, 4));
