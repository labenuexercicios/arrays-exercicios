let numeros = [1, 56, 3, 4];
let string = ['isaias', 'berg', 'vitor'];
let juntoMisturado = ['Breno', 42, true];

console.log('Original', numeros, string, juntoMisturado);


let numerosCopia = numeros.slice();
let stringCopia = string.slice();
let juntoMisturadoCopia = juntoMisturado.slice();

console.log('Cópia', numerosCopia, stringCopia, juntoMisturadoCopia);


function adiciona(adc, num) {

    return adc = numerosCopia.unshift(num);//adiciona o número que for passado como parametro ao array na primeira posição. 

}

console.log(adiciona(numeros, 30));
console.log('Cópia alterada:', numerosCopia);


function remova(adc){

    return adc=stringCopia.pop();

}

console.log(remova(string));  
console.log('Cópia alterada:',stringCopia);


function removaSegundo(remove){

    return remove=juntoMisturadoCopia.splice(2,1);//remove

}

console.log(removaSegundo(juntoMisturado))  
console.log('Cópia alterada:',juntoMisturadoCopia)



