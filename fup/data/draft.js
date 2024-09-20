let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let hora = +input();
let minuto = +input();
let dia = +input();
let mes = +input();
let ano = +input();
let horaFormatada = String(hora).padStart(2, '0');
let minutoFormatado = String(minuto).padStart(2, '0');
let diaFormatado = String(dia).padStart(2, '0');
let mesFormatado = String(mes).padStart(2, '0');
let anoFormatado = String(ano).slice(-2);

let dataHora = `${horaFormatada}:${minutoFormatado} ${diaFormatado}/${mesFormatado}/${anoFormatado}`;
console.log(dataHora)