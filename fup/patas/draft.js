let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let chuteChico = +input();
let chuteCebola = +input();
let quantiAnimais = +input();

let somaPatas = 0;

for (let i = 0; i < quantiAnimais; i += 1){
  let animal = input();
  if (animal === 'v' || animal === 'c'){
    somaPatas += 4; 
  } else if (animal === 'g'){
    somaPatas += 2;
  }
} 

write(somaPatas)
let diferencaCebola = Math.abs(somaPatas - chuteCebola);
let diferencaChico = Math.abs(somaPatas - chuteChico);

if (diferencaCebola > diferencaChico){
  write("Cebolinha");
} else if (diferencaChico > diferencaCebola){
  write("Chico");
} else {
  write("empate"); }