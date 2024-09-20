let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

var v1 = +input();
var v2 = +input();
var v3 = +input();

if (v1 + v2 > v3 && v1 + v3 > v2 && v2 + v3 > v1) {
  console.log("True");
} else {
  console.log("False");
}