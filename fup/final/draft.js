let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let n1 = +input();
let n2 = +input();
let mediaParcial = (n1 + n2) / 2

if (mediaParcial >= 7) {
  console.log("aprovado");
} 
if (mediaParcial < 4) {
  console.log("reprovado");
} 
if (4 <= mediaParcial && mediaParcial <= 7) {
  let notaFinal = +input();
  let mediaFinal = (mediaParcial + notaFinal) / 2
  if (mediaFinal >= 5) {
    console.log("aprovado na final");
  } else {
    console.log("reprovado na final");
  }
}