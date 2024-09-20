let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let x1 = +input();
let y1 = +input();
let x2 = +input();
let y2 = +input();

d = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
console.log(d.toFixed(2));