let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


function jokenpo(jog1: string, jog2: string){
    if (jog1 == "S" && jog2 == "P"){
        console.log("jog1");
    } else if (jog1 == "P" && jog2 == "S"){
        console.log("jog2");
    } else if (jog1 == "P" && jog2 == "R"){
        console.log("jog1");
    }  else if (jog1 == "R" && jog2 == "P"){
        console.log("jog2");
    } else if (jog1 == "R" && jog2 == "S"){ 
        console.log("jog1");
    }  else if (jog1 == "S" && jog2 == "R"){
        console.log("jog2");
    } else{
        console.log("empate");
    }
}

var jog1 = input();
var jog2 = input();

jokenpo(jog1,jog2);


