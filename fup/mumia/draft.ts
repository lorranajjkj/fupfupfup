let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function determineIdade(idade: number){
    if (idade < 12 ){
        return "crianca"
    }
    if (idade < 18){
        return "jovem"
    }
    if (idade < 65){
        return "adulto"
    }
    if (idade < 1000){
        return "idoso"
    }

    return "mumia"
}

let nome = input();
let idade = +input();

console.log(nome, "eh", determineIdade(idade));