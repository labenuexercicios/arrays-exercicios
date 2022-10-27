/* # Exercício 3

Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

- Adicione um item `number` ao início do primeiro array. Utilize `console.log()` para exibir o original e a cópia;
- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;

 */
 
const arrayNum = [5,6,2,7]
const arrayString = ["Warrior", "Mage", "Healer", "Archer"]
const arrayRandom = [5, "Gunslinger", 20===10]

console.log(arrayNum)
console.log(arrayString)
console.log(arrayRandom)

console.log(arrayNum[0])
console.log(arrayString[1])
console.log(arrayRandom[2])

console.log(arrayNum.includes(5))
console.log(arrayRandom.includes("Mage"))

const copiaArrayNum = arrayNum.slice()
const copiaArrayString = arrayString.slice()
const copiaArrayRandom = arrayRandom.slice()

copiaArrayNum.unshift(4)
console.log(arrayNum)
console.log(copiaArrayNum)

copiaArrayString.pop()
console.log(arrayString)
console.log(copiaArrayString)

copiaArrayRandom.splice(1,1)
console.log(arrayRandom)
console.log(copiaArrayRandom)


 




/* 
//Como criar copia independente
const copiaArrayString = arrayString.slice()
console.log(copiaArrayString)
console.log(arrayString) */ 