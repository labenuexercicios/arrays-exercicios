const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const numeros = [2, 32, 64, 87, 45]
const casa = ["pessoa", "cachorro" , "gato"] 
const notebook = [2022,"LABENU", 3+4>11 ]

console.log(numeros)
console.log(casa)
console.log(notebook)

console.log(`Tamanho Array 1:${numeros.length}`)
console.log(`Tamanho Array 2 :${casa.length}`)
console.log(`Tamanho Array 3 ${notebook.length}`)


console.log(`1ª item do Array1 ${numeros[0]}`)
console.log(`2ª item do Array2 ${casa[1]}`)
console.log(`3ª item do Array3 ${notebook[2]}`)

console.log(`Array 1 inclui ${numeros[0]}: ${numeros.includes(2)}`)

console.log(`Array 3 inclui ${notebook[0]}: ${numeros.includes(2018)}`)