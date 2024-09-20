function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function valorMeio(a: number, b: number, c: number){
    let soma =  a + b + c
    return soma - Math.max(a, b, c) - Math.min(a, b, c);
}

var a = +input();
var b = +input();
var c = +input();
console.log(valorMeio(a, b, c));