let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function calculeDelta(a: number, b: number, c: number){
    let delta = (b ** 2) - (4 * a * c);
   
    if (delta > 0){
        let raiz1= (- b + Math.sqrt(delta)) / (2 * a)
        let raiz2 = (- b - Math.sqrt(delta)) / (2 * a)

        return raiz1.toFixed(2) + "\n" + raiz2.toFixed(2);
    }
    if (delta === 0){
       let raizunica = (- b / (2 * a))
       return raizunica.toFixed(2);
    }
    
    return "nao ha raiz real"
    
}

let a = +input();
let b = +input();
let c = +input();

console.log(calculeDelta(a, b, c));
