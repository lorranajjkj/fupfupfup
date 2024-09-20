function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};


var a = parseInt(input());
var b = parseInt(input());

var resultado = '[';

for (let i = a; i < b; i++){
    if (i != a){
        resultado += ' ';
    }

    resultado += i;
}

resultado += ']';

console.log(resultado);

