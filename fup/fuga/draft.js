let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let fuga = input().split(" ");
let helicoptero = +fuga[0];
let policial = +fuga[1];
let ladrao = +fuga [2];
let distancia = +fuga[3];

while(true){
  if (ladrao === -1){
    ladrao = 0;
    break;
   }
  if (ladrao === 16){
    ladrao = 15;
    break;
    }
  if (ladrao === helicoptero){
    console.log("S");
    break;
    }
  if (ladrao === policial){
    console.log("N");
    break;
    }
}
