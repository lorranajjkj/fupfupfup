let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function verStatus(wifi, login, admin){
    if (!wifi) {
        console.log("you must connect to wifi");
    } else if (!login) {
        console.log("you need to login first");
    } else if (!admin) {
        console.log("you must to login as admin");
    } else {
        console.log("done");
    }
}

let wifi = parseInt(input());
let login = parseInt(input());
let admin = parseInt(input());

verStatus(wifi, login, admin);

