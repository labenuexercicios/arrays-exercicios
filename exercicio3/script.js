const primeiroArray = [2,7,6,1,3,9];
const segundoArray = ["cafe","cha","limao","bolacha"];
const terceiroArray = [5,"banana",true,"laranja",false,9];

let primeiroArrayCopia = [2,7,6,1,3,9];
let segundoArrayCopia = ["cafe","cha","limao","bolacha"];
let terceiroArrayCopia = [5,"banana",true,"laranja",false,9];

//Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
primeiroArrayCopia.push(9);
//Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
segundoArrayCopia.pop();
//Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
terceiroArrayCopia.splice(1,1);

console.log(`Original: ${primeiroArray}\nCópia:    ${primeiroArrayCopia} `);
console.log(`Original: ${segundoArray}\nCópia:    ${segundoArrayCopia} `);
console.log(`Original: ${terceiroArray}\nCópia:    ${terceiroArrayCopia} `);


