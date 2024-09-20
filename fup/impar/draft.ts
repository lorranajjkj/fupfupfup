let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let P = +input();
let D1 = +input();
let D2 = +input();

let somadedos = D1 + D2;
let vencedor;

if (somadedos % 2 === 0) {
    if (P === 0) {
        vencedor = 0;
    } else {
        vencedor = 1;
    }
} else {
    if (P === 0) {
        vencedor = 1;
    } else {
        vencedor = 0;
    }
}

console.log(vencedor);


