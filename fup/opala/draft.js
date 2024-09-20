let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let velocidade = +input();
let tempo = +input();
let consumo = +input();

let tempoHoras = tempo / 60;
let distancia = velocidade * tempoHoras;

let desempenho = distancia / consumo;
console.log(desempenho.toFixed(2));