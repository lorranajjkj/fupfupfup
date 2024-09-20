function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function substring(texto, primeiro, quantidade){
    if (primeiro < 0 || primeiro >= texto.length || quantidade < 0){
        return ""
    }

    return texto.substring(primeiro, primeiro + quantidade);
}

var texto = input();
var primeiro = +input();
var quantidade = +input();

console.log(substring(texto, primeiro, quantidade));
