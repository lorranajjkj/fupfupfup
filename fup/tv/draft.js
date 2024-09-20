let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let valorTV = +input();
let nParcelas = +input();

var taxasJuros = [0.00, 0.05, 0.10, 0.15, 0.20, 0.25, 0.30, 0.35, 0.40, 0.45];
var taxaJuros = taxasJuros[nParcelas - 1] || 0;

var parcela;
if (nParcelas === 1) {
  parcela = valorTV;
} else {
  var i = taxaJuros;
  parcela = (valorTV * (1 + i)) / nParcelas;
}

var totalPago = parcela * nParcelas;
console.log(parcela.toFixed(2));
console.log(totalPago.toFixed(2));
