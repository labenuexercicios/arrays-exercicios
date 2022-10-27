
/* Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
- Verifique se um item está incluído no primeiro array e depois no terceiro array e imprima o resultado destas verificações no console.log(). A primeira impressão deve retornar um booleano true e a segunda deve retornar um booleano false. 
 */







const numeros = [5, 2, 8, 4, 1, 7, 3, 9]

const palavras = ["Manuel", "Andressa", "Maula", "Otavio"]

const aleatorios = [5, 3, true, "carol", 7, "Mariana"]

console.log(`O array dos numeros são: ${numeros} a quantidade é de ${numeros.length} itens e seu primeiro item é o número ${numeros[0]}`)
console.log(`O array das palavras são: ${palavras} a quantidade é de ${palavras.length} itens e seu segundo item é o nome de ${palavras[1]}`)
console.log(`O array dos aleatorios são: ${aleatorios} a quantidade é de ${aleatorios.length} itens e o terceiro item é o valor ${aleatorios[2]}`)
console.log(`o numero 5 está incluido dentro do primeiro array ?`, numeros.includes(5))
console.log(`o nome de paula está incluido no dentro do terceiro array?`, aleatorios.includes("paula"))


