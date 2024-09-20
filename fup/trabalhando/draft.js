let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

var dia = ('1 = DOM && 2 = SEG && 3 = TER && 4 = QUA && 5 = QUI && 6 = SEX && 7 = SAB');
var hora = +input();

if (dia > 1 && dia =< 6) {
  if (hora >= 8 && hora >= 11 || hora >= 14 && hora <= 17 ) {
    console.log("SIM");
  } else {
    console.log("NAO");
  }
}