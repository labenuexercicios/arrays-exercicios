const quartosDisponiveis = [101,302,310]

const listaBrindes = ['caneca', 'Chaveiro', 'Bottom']

const listaMista = [123, 'caneca', false]

//a) Imprima a **quantidade de itens** de cada array (utilize um `console.log()` para cada impressão).

console.log(quartosDisponiveis)
console.log(listaBrindes)
console.log(listaMista)

//Imprima o **primeiro item** do primeiro array, o **segundo item** do segundo array, e o **terceiro item** do terceiro array.


console.log(quartosDisponiveis[0]) //Imprimindo apenas o primeiro item
console.log(listaBrindes[1]) // Imprimindo apenas o segundo item
console.log(listaMista[2])// Imprimindo apenas o terceiro item

//**Verifique** se um item está incluído no primeiro array e depois no terceiro array.
//  Imprima o resultado dessas verificações no `console.log()`. 
// A primeira impressão deve retornar um booleano **true** 
// e a segunda deve retornar um booleano **false**.


console.log(quartosDisponiveis.includes(310))

console.log(listaMista.includes('copo'))




