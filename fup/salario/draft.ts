function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function meuAumento(salario: number){
    var aumento: number;
    
    if (salario <= 1000 ){
        aumento = salario * 1.20;
        return aumento.toFixed(2);
    } else if (salario <= 1500){
        aumento = salario * 1.15;
        return aumento.toFixed(2);
    } else if (salario <= 2000){
        aumento = salario * 1.10;
        return aumento.toFixed(2);
    } 

    aumento = salario * 1.05;
    return aumento.toFixed(2);
}

var salario = parseFloat(input());
console.log(meuAumento(salario));
