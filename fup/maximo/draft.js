let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

var n1 = +input();
var n2 = +input();

if (n1 > n2) {
  console.log(n1);
} else {
  console.log(n2);
}