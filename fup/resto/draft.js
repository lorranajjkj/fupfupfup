let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let n = +input();
let d = +input();
let q = Math.floor(n / d);
let r = n % d;
console.log(q + " " + r);