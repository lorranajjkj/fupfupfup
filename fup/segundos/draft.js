let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let s = +input();
let hora = Math.floor(s / 3600);
let rst = (s % 3600);
let mins = Math.floor(rst / 60);
let segundos = rst % 60;
let tempo = (hora) + ':' + (mins) + ':' + (segundos);
console.log(tempo)