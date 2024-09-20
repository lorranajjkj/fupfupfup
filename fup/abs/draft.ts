let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function valorAbsoluto(n1: number, n2: number){
    return Math.abs(n1 - n2);
}

var n1 = +input();
var n2 = +input();

console.log(valorAbsoluto(n1, n2));
