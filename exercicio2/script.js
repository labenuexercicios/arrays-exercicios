/* Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
- Verifique se um item está incluído no primeiro array e depois no terceiro array e imprima o resultado destas verificações no console.log(). A primeira impressão deve retornar um booleano true e a segunda deve retornar um booleano false. 
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

