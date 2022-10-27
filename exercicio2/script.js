const numeros = [15, 101, 17, 0, 11, 21, 35]
const palavras = ["História", "Cultura", "Jornalismo", "Podcast"]
const numerosEPalavrasbooleans = [70, "Nacionalidade", "Poder", false, "Educação", 92, 1005, 69, true]

console.log('Quantidade de elementos no array "Números":', numeros.length)
console.log('Quantidade de elementos no array "Palavras":', palavras.length)
console.log('Quantidade de elementos no array "Números, palavras e booleans":', numerosEPalavrasbooleans.length)

console.log("Primeiro item do array de números:", numeros[0], "\n")
console.log("Segundo item do array de palavras:", palavras[1], "\n")
console.log("Terceiro item do array de números, palavras e booleans:", numerosEPalavrasbooleans[2])

console.log("Existe o elemento '21' no array de numeros:", numeros.includes(21))
console.log("Existe o elemento 'História' no array de numeros:", numerosEPalavrasbooleans.includes("História"))