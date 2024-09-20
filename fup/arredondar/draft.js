let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

var num = parseFloat();
var op = input("r, f, c");

if (op === 'r') {
  console.log(Math.round(num));
} if (op === 'f') {
  console.log(Math.floor(num));
} if (op === 'c') {
  console.log(Math.ceil(num));
} 
