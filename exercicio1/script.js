const numeros = [2,15,23,54,12,7];
const clientes = ["José", "Maria", "João","Jéssica","Khelvyn"];
const variados = [7, "Lua", "Bola", 8, 2, "Luiza"];

console.log(numeros);
console.log(clientes);
console.log(variados.includes("Bola"));

//Imprimindo a quantidade de itens de cada array

console.log (numeros.length);
console.log (clientes.length);
console.log (variados.length);

//Imprimindo itens dos arrays

console.log (numeros[0]);
console.log (clientes[1]);
console.log (variados[2]);

//Imprimindo INCLUDES no array

console.log (numeros.includes(15));
console.log (clientes.includes("Núbia"));

//imprimindo uma manipulação de arrays (adicionando e excluindo itens)

const numerosCopia = numeros.push(17);
console.log (numeros);

const clientesCopia = clientes.pop(); //Se mandar imprimir clientesCopia vai informar apenas o array retirado
console.log(clientes);

const variadosCopia = variados.splice(2,1); //Se mandar imprimir variadosCopia, vai informar o item retirado
console.log(variados);
