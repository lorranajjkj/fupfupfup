let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let n1 = parseInt(input());
var n2 = parseInt(input());
var n3 = parseInt(input());

if(n1 == n2 && n2 == n3){
    console.log(3);
} else if(n1 == n2 && n2 != n3){
    console.log(2);
} else if(n1 == n3 && n1 != n2){
    console.log(2);
} else if(n2 == n3 && n3 != n1){
    console.log(2);
} else if(n1 != n2 && n2 != n3){
    console.log(0);
}