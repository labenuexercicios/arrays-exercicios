const arrayNumOriginal = [1,4,6,7,2]
//console.log(arrayNumOriginal)

const arrayStringOriginal = ["banana","abacate", "maça"]
//console.log(arrayStringOriginal)

const arraySortidosOriginal = ["olá!",10, true]
//console.log(arraySortidosOriginal)



const copia1 = arrayNumOriginal.slice()
console.log(copia1)

const copia2 = arrayStringOriginal.slice()
console.log(copia2)

const copia3 = arraySortidosOriginal.slice()
console.log(copia3)

//na primeira copia

//- Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
copia1.push(9)
console.log(arrayNumOriginal,copia1,)

//- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
copia2.pop()
console.log(copia2)


//- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
copia3.splice(1,1)
console.log(copia3)



