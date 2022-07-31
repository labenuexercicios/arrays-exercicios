let numeros = [2, 32, 64, 87, 45]
let linguagem = [2, "HTML" , "python",'Javascript'] 
let notebook = [2022,"LABENU", 3+4>11 ]

 

// copia dos array 
let numerosCopia = numeros.slice()
let linguagemCopia = linguagem.slice()
let notebookCopia = notebook.slice()

// adicionar um item number ao primeiro array
 numerosCopia.push(11)
 console.log(`Original Array 1: ${numeros}`)
 console.log(`Copia Array 1:    ${numerosCopia}`)
// Remova o último item do segundo array.Exibir o original e a cópia;
 linguagemCopia.pop(3)
 console.log(`Original Array2 : ${linguagem}`)
 console.log(`Copia Array2    : ${linguagemCopia}`)
// Remova o segundo item do terceiro array. Exibir o original e a cópia;
 notebookCopia.splice(1,1)
 console.log(`Original Array3 :${notebook}`)
 console.log(`Copia Array3     :${notebookCopia}`)


