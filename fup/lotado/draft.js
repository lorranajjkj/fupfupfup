let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);



let capacidade = +input();
let movimento = +input();

while(true){
  if (capacidade === 0){
    write("vazio");
    break;
  }
  
  capacidade += 1;
  
  if (capacidade <= 59){
    write("ainda cabe");
    break;
  }
  if (capacidade === 60){
    write("lotado");
    break;
  }
  if (capacidade === 120){
    write("hora de partir");
    break;
  }
}