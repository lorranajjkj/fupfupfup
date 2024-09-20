let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let produto_um = +input();
let produto_dois = +input();
let produto_tres = +input();
let valor_um = +input();
let valor_dois = +input();
let valor_tres = +input();
let seudinheiro = +input();
let troco = seudinheiro - (produto_um * valor_um + produto_dois * valor_dois + produto_tres * valor_tres)
console.log(troco.toFixed(2))
