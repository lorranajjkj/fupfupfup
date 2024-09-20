let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

var op = input();
var numero = parseFloat(input());

if(op == "c"){
    console.log(Math.ceil(numero));
} else if(op == "f"){
    console.log(Math.floor(numero));
} else {
    console.log(Math.round(numero));
} 