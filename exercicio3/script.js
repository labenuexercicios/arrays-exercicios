//3 Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;
const numeros = [108, 16, 7]
const strings = ["Radha", "Krsna", "Guru"]
const varias = [2000, "Campeão Mundial", true]

const numerosCopia = numeros.slice()
const stringsCopia = strings.slice()
const variasCopia = varias.slice()

//3.1 Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
numeros.push(64)
console.log(numeros) //(4) [108, 16, 7, 64]
console.log(numerosCopia) //(3) [108, 16, 7]

//3.2 Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
strings.splice(2, 1)
console.log(strings) // (2) ['Radha', 'Krsna']
console.log(stringsCopia) //  (3) ['Radha', 'Krsna', 'Guru']

//3.3 Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
varias.splice(1,1)
console.log(varias) //(2) [2000, true]
console.log(variasCopia) //(3) [2000, 'Campeão Mundial', true]