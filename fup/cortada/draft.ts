function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function calculoArea(b: number, t: number){
    var area_notaTotal = 160 * 70;
    var metade_areanota = area_notaTotal / 2;

    var partefelix = (b + t) * 70 / 2;

    if (partefelix > metade_areanota){
        return 1;
    } else if (partefelix < metade_areanota){
        return 2;
    } 

    return 0;
}

var b = +input();
var t = +input();

console.log(calculoArea(b, t));
