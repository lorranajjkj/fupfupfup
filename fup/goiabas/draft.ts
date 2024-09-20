function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

var capacidade_cesta = +input();
var bananas = +input();
var goiabas = +input();
var mangas = +input();

var frutas_totais = bananas + goiabas + mangas;

var viagens = Math.ceil(frutas_totais / capacidade_cesta);

console.log(viagens);
