const listaNumeros = [1, 2, 3, 4, 5]
const listaStrigs = ['nome', 'sobrenome', 'profissao']
const misturados = [1, 'nome', true]

// a) Imprima a **quantidade de itens** de cada array (utilize um `console.log()` para cada impressão).
console.log(listaNumeros.length)
console.log(listaStrigs.length)
console.log(misturados.length)

// b) Imprima o **primeiro item** do primeiro array, o **segundo item** do segundo array, e o **terceiro item** do terceiro array.
console.log(listaNumeros[0])
console.log(listaStrigs[1])
console.log(misturados[2])


// c) **Verifique** se um item está incluído no primeiro array e depois no terceiro array. Imprima o resultado dessas verificações no `console.log()`. A primeira impressão deve retornar um booleano **true** e a segunda deve retornar um booleano **false**.
console.log(listaNumeros.includes(2))
console.log(misturados.includes('nomes'))
