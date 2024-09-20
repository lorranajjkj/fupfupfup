// function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function loopiii(a, b){
    let resultado = '[';
    for (let i = a; i >= b; i--){
        resultado += i;
        if (i > b){
            resultado += ', ';
        }
    }

    resultado += ']'
    console.log(resultado);
}

var a = parseInt(input());
var b = parseInt(input());
console.log(loopiii(a, b));
