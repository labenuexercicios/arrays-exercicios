/* # Exercício 3

Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

- Adicione um item `number` ao início do primeiro array. Utilize `console.log()` para exibir o original e a cópia;
- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
 */


const arrayApenasNumeros = [30, 22, 18, 40]
const arrayString = ["Nesuko", "lua", "house"]
const arrayNumeroStringBoleano = ["hashira", 10, true]


const copiaArrayApenasNumeros = arrayApenasNumeros.slice() 
const copiaArrayString = arrayString.slice() 
const copiaArrayNumeroStringBoleano = arrayNumeroStringBoleano.slice() 

copiaArrayApenasNumeros.unshift(180)
copiaArrayString.pop()
copiaArrayNumeroStringBoleano.splice(1, 1)
//Indice primeiro remove apartir dele 1

console.log(`Array Apenas numero original: ${arrayApenasNumeros}\nCopia apenas numero: ${copiaArrayApenasNumeros}`)
console.log(`Array String original:${arrayString}\nCopia Arrai String:${copiaArrayString}`)
console.log(`Array Numeros String Boleano original:${arrayNumeroStringBoleano}\nCopia Numeros String Boleano:${copiaArrayNumeroStringBoleano}`)



