function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function filhoMaisVelho(m: number, a: number, b: number){
    var somaIdades = (m - (a + b))
    return Math.max(a, b, somaIdades);
}

var m = +input();
var a = +input();
var b = +input();

console.log(filhoMaisVelho(m, a , b));
